'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| The GTA 6 Ecosystem" />
        <TitleText
          title={<>Powering Gaming, Rewards, and Crypto Innovation</>}
        />

        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src=" https://res.cloudinary.com/dfwdzot6l/image/upload/v1743230044/WhatsApp_Image_2025-03-28_at_8.55.58_PM_1_amjk66.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] rounded-lg object-cover "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
