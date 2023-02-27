import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//hooks
import useMediaQuery from "../../hooks/useMediaQuery";
//assets
import spaceLogo from "../../assets/shared/logo.svg";
import openMenu from "../../assets/shared/icon-hamburger.svg";
import closeNav from "../../assets/shared/icon-close.svg";
//Design
import "./Navbar.scss";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [openNav, setOpenNav] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <img src={spaceLogo} alt="logo" className="logo" />
        </NavLink>

        {isDesktop ? (
          <ul className="navbar__list">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              <li className="navbar__list--item">
                <span>00</span> Home
              </li>
            </NavLink>
            <NavLink
              to="destination"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              <li className="navbar__list--item">
                <span>01</span> Destination
              </li>
            </NavLink>
            <NavLink
              to="crew"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              <li className="navbar__list--item">
                <span>02</span> Crew
              </li>
            </NavLink>
            <NavLink
              to="technology"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              <li className="navbar__list--item">
                <span>03</span> Technology
              </li>
            </NavLink>
          </ul>
        ) : (
          <>
            <img
              src={openMenu}
              alt="openMenu"
              className="openMenu"
              onClick={() => setOpenNav(true)}
            />
            {openNav && (
              <div className="mobile__navbar">
                <img
                  src={closeNav}
                  alt="closeMenu"
                  className="closeMenu"
                  onClick={() => setOpenNav(false)}
                />
                <div>
                  <ul className="mobile__list">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active__link" : "link"
                      }
                      onClick={() => setOpenNav(false)}
                    >
                      <li className="mobile__list--item">
                        <span>00</span> Home
                      </li>
                    </NavLink>
                    <NavLink
                      to="destination"
                      className={({ isActive }) =>
                        isActive ? "active__link" : "link"
                      }
                      onClick={() => setOpenNav(false)}
                    >
                      <li className="mobile__list--item">
                        <span>01</span> Destination
                      </li>
                    </NavLink>
                    <NavLink
                      to="crew"
                      className={({ isActive }) =>
                        isActive ? "active__link" : "link"
                      }
                      onClick={() => setOpenNav(false)}
                    >
                      <li className="mobile__list--item">
                        <span>02</span> Crew
                      </li>
                    </NavLink>
                    <NavLink
                      to="technology"
                      className={({ isActive }) =>
                        isActive ? "active__link" : "link"
                      }
                      onClick={() => setOpenNav(false)}
                    >
                      <li className="mobile__list--item">
                        <span>03</span> Technology
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
