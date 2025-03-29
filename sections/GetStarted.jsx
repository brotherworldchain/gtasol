'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row- flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1-`}
      >
        <img
          src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1743230045/WhatsApp_Image_2025-03-28_at_8.55.58_PM_edjcei.jpg"
          alt="Get-Started"
          className="w-[90%] h-[90%] object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]- flex justify-center flex-col"
      >
        <TypingText title="| GTA 6 Token Roadmap " />
        <TitleText title={<> The Journey of GTA 6 </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px]- gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps key={features} number={index + 1} text={features} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
