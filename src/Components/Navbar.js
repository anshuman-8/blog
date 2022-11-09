import React from "react";
import { SunIcon, MoonIcon,GitHubIcon } from "../Assets/icons"
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const {isDark,setIsDark} = props;

  return (
    
      <div className="dark:bg-teal-900">
          <div className="flex flex-row justify-between items-center px-3 py-4 mx-5 md:mx-20">
            <div className="text-xl md:text-2xl"> <a className="font-semibold hover:text-blue-600" title="Anshuman Swain's portfolio" href="http://anshuman-8.github.io" >Anshuman</a>
            <Link to="/blog">
             's Blog
            </Link>
            </div>
            
              <ul className="flex flex-row justify-evenly" role="search">
                <li className="hidden md:px-4 md:inline-block">
                  <Link className="hover:underline" aria-current="page" to="/blog">
                    Home
                  </Link>
                </li>
                <li className="md:px-4 px-3">
                  <Link className="hover:underline" to="/blog/contact">
                    Contact
                  </Link>
                </li>
                <button className="md:px-4 px-3 hover:scale-110 duration-100" type="button" onClick={()=>setIsDark(!isDark)}>
                {isDark
                  ? <span title="Dark Mode!"><MoonIcon /></span>
                  : <span title="Light Mode!"><SunIcon /></span>
                }
                </button>  
                <a href="https://github.com/anshuman-8" title="My GitHub" target="_blank" className="hidden md:px-4 md:inline-block hover:scale-110 duration-100" rel="noreferrer"><span><GitHubIcon/></span></a> 
              
              </ul>
          </div>
      </div>
    
  );
};

export default Navbar;
