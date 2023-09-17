import { AiFillPlayCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import Spline from '@splinetool/react-spline';
import Individual from "./Individuals/Individual";
import  { userDataDemo } from "./Individuals/IndividualData"

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center border-blue-500 items-center border-[0.5px] text-sm font-medium text-white bg-gradient-to-r"
const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-1 w-full">
        <div className="flex flex-1 flex-col p-12">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Send Crypto <br /> for those in need
          </h1>
          <p className="text-left mt-5 text-white font-light text-base">
            Empowering Change: Crypto for Compassion on through TrustWave
          </p>

          <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#0a4cad] p-4 rounded-full cursor-pointer hover:bg-[#000AFF] max-w-xs"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <Link to="/Individuals" className="text-white text-base font-semibold ">
              Get Started
            </Link>
          </button>

          <div className="grid sm:grid-cols-3 mt-10 grid-cols-2 w-full">
          <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Non-Profit
            </div>
            <div className={companyCommonStyles}>
              Secure
            </div>
            <div className={companyCommonStyles}>
              Ethereum
            </div>
            <div className={companyCommonStyles}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>
              Reliable
            </div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <Spline className="spline-container w-full h-full" scene="https://prod.spline.design/N5C94L9OXt1ZEiIP/scene.splinecode" />
        </div>
      </div>

      <div className="flex flex-1 w-full justify-center items-center bg-gradient-to-r py-10">
  <div className="container mx-auto text-center">
    <div className="rounded-lg shadow-lg p-6 inline-block">
    <h2 className="text-3xl sm:text-5xl text-white py-1">
           Most Popular Individuals
          </h2>
      <div className="grid grid-cols-3 gap-4"> {/* Added grid container */}
        <div><Individual
            handleConnectWallet={undefined}
            address={userDataDemo[0].address}
            message={userDataDemo[0].message}
            description={userDataDemo[0].description}
            homeAddress={userDataDemo[0].homeAddress}
            name={userDataDemo[0].name}
            image={userDataDemo[0].url}
          /></div> 
       <div><Individual
            handleConnectWallet={undefined}
            address={userDataDemo[1].address}
            message={userDataDemo[1].message}
            description={userDataDemo[1].description}
            homeAddress={userDataDemo[1].homeAddress}
            name={userDataDemo[1].name}
            image={userDataDemo[1].url}
          /></div> 
          <div><Individual
            handleConnectWallet={undefined}
            address={userDataDemo[2].address}
            message={userDataDemo[2].message}
            description={userDataDemo[2].description}
            homeAddress={userDataDemo[2].homeAddress}
            name={userDataDemo[2].name}
            image={userDataDemo[2].url}
          /></div> 
      </div>
    </div>
  </div>
</div>
</div>

  )
}




export default HomePage