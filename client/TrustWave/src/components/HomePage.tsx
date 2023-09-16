import { AiFillPlayCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import Spline from '@splinetool/react-spline';
import Individual from "./Individuals/Individual";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center border-blue-500 items-center border-[0.5px] text-sm font-medium text-white bg-gradient-to-r"

const HomePage = () => {
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col py-12 px-4 items-start md:p-20 justify-between">
          <div className="flex flex-1 justify-start mf:mr-10 items-start flex-col">
            <h1 className="text-3xl sm:text-5xl text-white py-1">
              Send Crypto <br /> for those in need
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Empowering Change: Crypto for Compassion on through TrustWave
            </p>
          
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#0a4cad] p-4 rounded-full cursor-pointer hover:bg-[#000AFF]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <Link to="/Individuals" className="text-white text-base font-semibold">
                Get Started
              </Link>
            </button>

          <div className="grid sm:grid-cols-3 mt-10 grid-cols-2 w-full">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Non-Profit
            </div>
            <div className={companyCommonStyles}>
              Secure</div>
            <div className={companyCommonStyles}>
              Ethereum
            </div>
            <div className={companyCommonStyles}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>
              Reliable</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r py-10">
          <div className="container mx-auto px-4">
            <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-white font-semibold ">Top Funded</h2>
              <div><Individual handleConnectWallet={function (): void {
                  throw new Error("Function not implemented.");
                } } address={""}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
      <Spline className="spline-container" scene="https://prod.spline.design/N5C94L9OXt1ZEiIP/scene.splinecode" />
      </div>
    </div>
    </div>
  )
}


export default HomePage