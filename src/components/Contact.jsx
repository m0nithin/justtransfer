import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { footerVariants, slideIn } from "../utils/motion";

import {BsTelegram, BsTwitter} from 'react-icons/bs'
import { AiOutlineAreaChart, AiOutlineMail, AiOutlineSwap } from "react-icons/ai";
import { GiUnicorn, GiWhiteBook } from "react-icons/gi";
import { links } from "../constants";

const Contact = () => {

  return (
    <div
      className={`xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
        <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`sm:px-16 px-6 py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Moodeng Foundation
        </h4>

        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] hover:bg-slate-800 rounded-[32px] gap-[12px]">
          
          <a href={'https://etherscan.io/address/0xfe737b0d2f4d2796726e079c895f7f49636fa0c3'} className="font-normal text-[16px] text-white ">
            DONATE
          </a>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div className="flex gap-4">
            <a href={links.telegram}   target="_blank">
            <BsTelegram className="text-2xl hover:text-lime-400" />
            </a>
            <a href={links.twitter}  target="_blank">
            <BsTwitter className="text-2xl hover:text-lime-400" />

            </a>
            <a href={links.uniswap}  target="_blank">
            <AiOutlineSwap className="text-2xl hover:text-lime-400" />

            </a>
            <a href={links.dextools}  target="_blank">
            <AiOutlineAreaChart className="text-2xl hover:text-lime-400" />
            </a>
            <a href="/pdf.pdf"  target="_blank">
            <GiWhiteBook className="text-2xl hover:text-lime-400" />
            </a>
            <a href="mailto:info@moodeng.vip"  target="_blank">
            <AiOutlineMail className="text-2xl hover:text-lime-400" />
            </a>
          </div>
          <div>
          <p className="font-normal text-[14px] text-black opacity-50">
            Copyright © Moodeng Foundation. All rights reserved.
          </p>
          <a href="mailto:info@moodeng.vip"  target="_blank" className="flex flex-col">
            info@moodeng.vip
            </a>
          </div>


        </div>
      </div>
    </div>
  </motion.footer>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <img src="/logo.png" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");










