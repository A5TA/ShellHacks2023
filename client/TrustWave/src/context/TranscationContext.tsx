import { createContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import { contractAddress, contractABI } from "../utils/constants"

interface FormData {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
}
  

export const TransactionContext = createContext<any>({})
interface CustomWindow extends Window {
    ethereum?: any;
  }
  
const { ethereum }: CustomWindow = window;

const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    
    return transactionContract
}

interface TransactionProviderProps {
    children: React.ReactNode;
  }
  

export const TransactionProvider: React.FC<TransactionProviderProps> = ({children}: any) => {
    const [currentAccount, setCurrentAccount] = useState<string | undefined>(undefined)
    const [formData, setFormData] = useState({addressTo: "", amount: "", keyword: "", message: ""})
    const [, setIsLoading] = useState<boolean>(false)
    const [, setTransactionCount] = useState(localStorage.getItem("transactionCount"))

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: keyof FormData // This enforces that name is a key of FormData
      ) => {
        setFormData((prevState) => ({
          ...prevState,
          [name]: e.target.value,
        }));
      };

    const checkWalletConnection = async () => {
        try {
            if (!ethereum) return alert("Metamask missing please install Metamask ")
            const accounts = await ethereum.request({method: 'eth_accounts'})

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                console.log('no account found')
            }
            console.log(accounts)
        } catch (error) {
            console.log(error)
        }
        
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Metamask missing please install Metamask ")
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])

        } catch (error) {
            console.log(error)

        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Metamask missing please install Metamask ")
            
            const parsedCurrency = ethers.parseEther(formData.amount)
            console.log(formData)
            const transactionContract =await getEthereumContract()
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: formData.addressTo,
                    gas: '0x5208',
                    value: parsedCurrency.toString(16)
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(formData.addressTo, parsedCurrency, formData.message, formData.keyword)
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)

            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)
            
            const transactionCount = await transactionContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber())
            await transactionHash.wait()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkWalletConnection()
    },[])

  return (
    <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}