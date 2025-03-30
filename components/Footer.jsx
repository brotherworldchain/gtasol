'use client';

import { motion } from 'framer-motion';
// import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Join the GTA 6 Revolution: Powering Gaming, Rewards, and NFTs with
          Every Transaction!
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4 space-y-4 sm:space-y-0">
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
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">GTA 6 Token</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 GTA 6 Token. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* Add social icons or links here if needed */}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
