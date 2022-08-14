import React from "react";
import { SunIcon, MoonIcon } from "../Assets/icons"
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const [isDark, setIsDark] = props.ctx.theme;

  return (
    <>
      <div>
        <nav className={isDark===true?"navbar navbar-expand-lg bg-dark navbar-dark":"navbar navbar-expand-lg bg-light"} >
          <div className="container-fluid">
            <Link className="navbar-brand mx-5" to="/">
              Anshuman's Blog
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
              </ul>
              <ul className="d-flex navbar-nav me-5 mb-2 mb-lg-0" role="search">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-sm-center" href="/">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                <button className="btn " type="button" onClick={()=>setIsDark(!isDark)}>
            {isDark
              ? <span title="Dark Mode!"><MoonIcon /></span>
              : <span title="Light Mode"><SunIcon /></span>
            }
          </button>   
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
