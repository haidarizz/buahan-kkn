import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Profil", link: "/profil" },
    { name: "Potensi Wisata", link: "/wisata" },
    { name: "Peta", link: "/peta" },
    { name: "Kegiatan", link: "/kegiatan" },
    { name: "Petunjuk", link: "/petunjuk" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-[0px] left-0 h-[64px] z-50">
      <div className="lg:flex items-center justify-between bg-white bg-opacity-80 hover:bg-opacity-100 duration-200 ease-in-out mx-auto py-4 lg:px-32 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-opensans 
      text-gray-800"
        >
          <span className="text-2xl lg:text-3xl text-darkgreen-600 mr-1 pt-2"></span>
          Buahan
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-[17px] cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`bg-white bg-opacity-50 lg:bg-opacity-0 lg:flex lg:items-center lg:pb-0 pb-2 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-[64px]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-6 text-xl lg:my-0 my-7">
              <a
                href={link.link}
                className="font-opensans py-3.5 px-2 text-darkgreen hover:text-brown lg:hover:border-b-4 lg:hover:border-b-brown duration-200 lg:duration-0 ease-in"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
