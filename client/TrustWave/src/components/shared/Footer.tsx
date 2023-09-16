import { Link } from "react-router-dom";
import { AiFillFacebook } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'; 
import {FaTwitter} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai'; 
import {AiOutlineInstagram} from 'react-icons/ai';  

const Footer = () => {
  return (
    
    <footer className="flex flex-grow text-white mt-8 py-20" style={{backgroundColor: 'rgba(11, 8, 59, 0.05)'}}>
      <div className="container mx-auto flex justify-between items-center w-full">
        <div>
          <h2 className="text-2xl font-bold">TrustWave</h2>
          <p className="text-sm">Empowering Change through Crypto</p>
        </div>
        
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="mb-2">© 2023 TrustWave</p>
          <nav className="flex space-x-4">
            <Link to="/privacy-notice" className="text-white hover:underline">Privacy Notice</Link>
            <Link to="/legal" className="text-white hover:underline">Legal</Link>
            <Link to="/accessibility-statement" className="text-white hover:underline">Accessibility Statement</Link>
          </nav>
        </div>
        
        <div className="flex space-x-4">
          {/* Replace with your social media links */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500" >
            <i className="fab fa-facebook"></i><AiFillFacebook />
          </a>
          <a href="https://github.com/A5TA/ShellHacks2023" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">
            <i className="fab fa-github"></i> <AiFillGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter"></i> <FaTwitter /> 
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-700">
            <i className="fab fa-youtube"></i> <AiFillYoutube />  
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-700">
            <i className="fab fa-instagram"></i> <AiOutlineInstagram />  
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer