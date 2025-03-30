/* eslint-disable quotes */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
// import Link from 'next/link';

import styles from "../styles";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   const [copied, setCopied] = useState(false);
   const address = "0x9eBe276106Ffb2a3b47977bFDcCBeD9484CAF93d";

   const handleCopy = () => {
     navigator.clipboard
       .writeText(address)
       .then(() => {
         setCopied(true);
         setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
       })
       .catch((err) => console.error("Failed to copy:", err));
   };
  
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1743230044/WhatsApp_Image_2025-03-29_at_7.18.48_AM_vojlwx.jpg"
          alt="search"
          className="w-[44px] h-[44px] rounded-full object-cover"
        />

        <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
          Welcome to GTA 6
        </h2>

        <button type="button" onClick={toggleMenu}>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </button>
      </div>
      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className=" bg-[gray] bg-opacity-70">
          <div className="flex flex-col items-center mx-2">
            <ul className="flex flex-col text-center items-center space-y-4 mt-10 pb-10 ">
              <li>
                Contract address
                <div
                  className="hover:bg-black flex items-center text-white bg-[#320e33] rounded-lg py-2 px-10 sm:p-4 font-medium cursor-pointer"
                  onClick={handleCopy}
                >
                  <div>{address}</div>
                  {copied && (
                    <span className="ml-2 text-green-400">Copied!</span>
                  )}
                </div>
              </li>

              <a
                href="https://t.me/GTAvionBsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
              >
                Join Us on Telegram
              </a>
              <a
                href="https://x.com/bscgta?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-500 transition"
              >
                Follow Us on Twitter
              </a>
            </ul>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
