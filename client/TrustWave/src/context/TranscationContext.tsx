import { createContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import { contractAddress, contractABI } from "../utils/constants"



export const TransactionContext = createContext<any>({})
interface CustomWindow extends Window {
    ethereum?: any;
  }
  
const { ethereum }: CustomWindow = window;

const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({children}: any) => {
    const [currentAccount, setCurrentAccount] = useState()

    const checkWalletConnection = async () => {
        if (!ethereum) return alert("Metamask missing please install Metamask ")
        const accounts = await ethereum.request({method: 'eth_accounts'})
        console.log(accounts)
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Metamask missing please install Metamask ")
            const accounts = await ethereum.request({method: 'eth_request_accounts'})
            setCurrentAccount(accounts[0])

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        checkWalletConnection()
    },[])

  return (
    <TransactionContext.Provider value={{connectWallet}}>
      {children}
    </TransactionContext.Provider>
  );
}