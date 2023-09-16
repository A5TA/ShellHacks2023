import logo from '../../assets/TrustWave.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { Link } from "react-router-dom";

const NavBarItem = ({ category, setSelected, selected }: { category: string,  setSelected: any, selected: categoryType }) => (
  <Link to={`/${category}`} className={`font-semibold mx-4 tracking-wide cursor-pointer ${selected.name == category && 'underline'} hover:underline`} onClick={() => setSelected({name: category})}>
    {category}
  </Link>
)

interface categoryType {
  name: string;
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const categories: string[] = ["Home", "Individuals", "Charities", "AboutUs"]
  const [selectedCategory, setSelectedCategory] = useState<categoryType>({name: 'none'});
    
  return (
    <nav className='w-full flex md:justify-between justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <Link to='/'><img src={logo} alt="logo" className='cursor-pointer' /></Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {categories.map((item: string, index: number) => (
          <NavBarItem key={index+item} category={item} setSelected={setSelectedCategory} selected={selectedCategory}/>
        ))}
        <li className="font-semibold bg-[#0a4cad] py-2 px-7 mr-4 rounded-full cursor-pointer hover:bg-[#000AFF]">
          SignUp
        </li>
        <li className="font-semibold bg-[#0a4cad] py-2 px-7 rounded-full cursor-pointer hover:bg-[#00AFFF]">
          Login
        </li>
      </ul>
      {/* Mobile drop down menu */}
      <div className="flex relative md:hidden">
        {!toggleMenu && (
          <GiHamburgerMenu fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <IoClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="font-sans underline-offset-3 z-10 fixed -top-0 -right-2 p-3 w-[55vw] h-screen shadow-2xl list-none
            flex flex-col justify-start items-center bg-indigo-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-white font-bold"
          >
            <li className="text-xl w-full my-2"><IoClose onClick={() => setToggleMenu(false)} /></li>
            {categories.map((item: string, index: number) => (
              <div  className="my-2 text-lg" onClick={() => setToggleMenu(false)}>
                <NavBarItem key={index+item} category={item} setSelected={setSelectedCategory} selected={selectedCategory} />
              </div>
             ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar