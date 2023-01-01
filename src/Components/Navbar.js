import React from "react";
import { SunIcon, MoonIcon,GitHubIcon } from "../Assets/icons"
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const {isDark,setIsDark} = props;

  return (
    
      <div className="dark:bg-teal-900">
          <div className="flex flex-row justify-between items-center px-3 py-4 mx-5 md:mx-20">
            <Link to="/blog">
            <div className="text-lg md:text-2xl"> <span className="md:text-3xl">Anshuman</span>
             's Blog
            </div>
            </Link>
            
              <ul className="flex flex-row justify-evenly" role="search">
                <li className="hidden md:px-4 md:inline-block hover:bg-green-400/30 backdrop-blur py-2 rounded-md hover:cursor-pointer">
                  <Link className="" aria-current="page" to="/blog">
                    Home
                  </Link>
                </li>
                <li className="md:px-4 px-3 hover:bg-green-400/30 py-2 rounded-md hover:cursor-pointer">
                  <a className="" title="Anshuman Swain's portfolio" href="http://anshuman-8.github.io">
                    Portfolio
                  </a>
                </li>
                <li className=" hidden md:inline-block md:px-4 px-3 hover:bg-green-400/30 py-2 rounded-md hover:cursor-pointer">
                  <Link className="" to="/blog/contact">
                    Contact
                  </Link>
                </li>
                <button className="md:px-4 px-3 hover:scale-110 duration-100 hover:bg-green-400/30 py-2 rounded-md" type="button" onClick={()=>setIsDark(!isDark)}>
                {isDark
                  ? <span title="Dark Mode!"><MoonIcon /></span>
                  : <span title="Light Mode!"><SunIcon /></span>
                }
                </button>  
                <a href="https://github.com/anshuman-8" title="My GitHub" target="_blank" className="hidden md:px-4 md:inline-block hover:scale-110 duration-100 hover:bg-green-400/30 py-2 rounded-md" rel="noreferrer"><span><GitHubIcon/></span></a> 
              
              </ul>
          </div>
      </div>
    
  );
};

export default Navbar;
