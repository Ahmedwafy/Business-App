import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo/logo.png";
import "./Navbar.css";

export default function Navbar() {
  // Mobile Menu State
  const [sidenav, setSidenav] = useState(false);

  // Desktop Fixed Menu
  const [sticky, setSticky] = useState(false);

  // Mobile Icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  // SideNav
  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  // Scroll Fixed Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20); // Update sticky state based on scroll position
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>
            <div className={`menu_items ${sidenav === true ? "active" : ""}`}>
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true}>
                    About US
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="blog" spy={true} smooth={true}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
