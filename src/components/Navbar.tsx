import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
// import { MdOutlineCancel } from "react-icons/md";

// type Props = {

// }

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
    console.log("fish");
  };

  return (
    <div className="text-white flex mx-auto justify-between h-24  2xl:h-40 items-center max-w-[1240px] px-4 2xl:max-w-[2200px] font-semibold">
      <h1 className="text-3xl 2xl:text-6xl font-bold text-[#00df9a] cursor-pointer hover:text-white">
        REACT.
      </h1>
      <ul className="flex max-md:hidden 2xl:text-2xl xl:text-xl lg:text-lg ">
        <li className="my-10 mx-4 2xl:p-0 hover:text-green-300 duration-300 cursor-pointer">
          Home
        </li>
        <li className="my-10  mx-4 2xl:p-0 hover:text-green-300 duration-300 cursor-pointer">
          Account
        </li>
        <li className="my-10  mx-4 2xl:p-0 hover:text-green-300 duration-300 cursor-pointer">
          About
        </li>
        <li className="my-10  mx-4 2xl:p-0 hover:text-green-300 duration-300 cursor-pointer">
          Contact
        </li>
        <li className="text-black ml-4 border border-[#00df9a]  rounded-2xl bg-[#00df9a]  2xl:px-4 my-8 mx-4 py-2 w-32  2xl:w-[200px] xl:w-40 text-center hover:bg-white hover:text-[#00df9a] duration-500 hover:border-white">
          Get Started
        </li>
      </ul>

      <div
        className="flex md:hidden hover:text-green-400"
        onClick={handleShowNav}
      >
        {showNav ? <FaXmark /> : <MdOutlineMenuOpen />}
      </div>

      {showNav && (
        <div className="ml-0 flex flex-col fixed left-0 top-0 max-sm:w-[60%] w-[40%] border-r border-r-gray-900 h-full uppercase bg-black m-4 z-10">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] z-10 ml-2 hover:text-white duration-300">
            REACT.
          </h1>

          <ul className="uppercase p-4">
            <li className="p-4  border-b border-b-gray-800 hover:text-green-300 duration-300">
              Home
            </li>
            <li className="p-4  border-b border-b-gray-800 hover:text-green-300 duration-300">
              Account
            </li>
            <li className="p-4  border-b border-b-gray-800 hover:text-green-300 duration-300">
              About
            </li>
            <li className="p-4  border-b border-b-gray-800 hover:text-green-300 duration-300">
              Contact
            </li>
            <li className="p-4  border-b border-b-gray-800 hover:text-green-300 duration-300 ">
              Get Started
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
