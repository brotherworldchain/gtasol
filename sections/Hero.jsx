'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          GTA 6 – The Ultimate Gaming Reward Token!{" "}
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          {/* <Image
            height={20}
            width={300}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1711727720/utilities/WhatsApp_Image_2024-03-29_at_16.05.01_cb10c894-removebg-preview_onlrr6.png"
            alt="play"
            className=""
          /> */}
          <motion.img
            src=" https://res.cloudinary.com/dfwdzot6l/image/upload/v1743230044/WhatsApp_Image_2025-03-29_at_7.18.48_AM_vojlwx.jpg"
            alt="stamp"
            className="sm:w-[255px] w-[200px] sm:h-[255px] rounded-full h-[200px] object-cover "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, repeatType: "loop" }}
          />
          {/* <h1 className={styles.heroHeading}> Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}> Ness</h1> */}
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
          src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1743230661/WhatsApp_Image_2025-03-28_at_8.55.58_PM_2_odss1a.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          {/* <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1711727720/utilities/WhatsApp_Image_2024-03-29_at_16.05.01_cb10c894-removebg-preview_onlrr6.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              anim ate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: "loop" }}
            />
          </div> */}
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
