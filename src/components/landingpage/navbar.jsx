import React, { useState, useEffect } from "react";
import ChangeButton from "../landingpage/changebutton";
import logo from "/assets/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 flex items-center justify-between px-10 py-3 lg:px-20 lg:py-3 sm:px-4 sm:py-3 transition-all duration-300 ease-in-out bg-white bg-opacity-100${
        scrolled
          ? "bg-white bg-opacity-100 border-b-2 border-gray-200"
          : "bg-white bg-opacity-100 border-b-0 border-transparent"
      }`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Duolingo Logo"
          style={{
            width: "70px",
            height: "35px",
            objectFit: "contain",
          }}
          className="h-8 w-auto"
        />
      </div>
      <ChangeButton />
    </nav>
  );
};

export default Navbar;
