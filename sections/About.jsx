'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import VideoPlayer from './VideoPlayer';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About GTA 6 Token" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">GTA 6 Token</span> is the ultimate
        gaming reward cryptocurrency on the Binance Smart Chain, merging the
        thrill of gaming with the power of decentralized finance. Inspired by
        the high-stakes, action-packed world of gaming, GTA 6 isn't just a
        token—it's a revolution in gaming rewards, NFTs, and digital ownership.
        <br />
        <br />
        <VideoPlayer />
        <br />
        <br />
        With a{" "}
        <span className="font-extrabold">
          dedicated and passionate community,
        </span>{" "}
        GTA 6 brings players, traders, and gaming enthusiasts together under one
        ecosystem. Whether you're earning rewards, collecting exclusive NFTs, or
        diving into adrenaline-fueled experiences, every GTA 6 holder is part of
        something bigger.
        <span className="font-extrabold">
          {" "}
          A decentralized, community-driven token,{" "}
        </span>
        GTA 6 powers a sustainable rewards system, fuels in-game asset
        ownership, and ensures gamers are always at the center of the action.
        <br />
        <br />
        <br />
        Whether you're a hardcore gamer, a crypto enthusiast, or here for the
        next big thing, GTA 6 lets you experience gaming like never before.
        <span className="font-extrabold">
          {" "}
          Play, earn, and level up—join the GTA 6 revolution!{" "}
        </span>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
