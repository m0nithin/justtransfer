import { motion } from "framer-motion";
import { styles } from "../styles";
import { links } from "../constants";
import { ComputersCanvas } from "./canvas";
import { imgAnim } from "../utils/motion";
import { AiOutlineAreaChart, AiOutlineArrowDown, AiOutlineSwap } from "react-icons/ai";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";
import { useState } from "react";



const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#51bfc9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        <div className=" w-full flex sm:flex-row flex-col-reverse justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="/logo.png" width={300} alt="" />
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
                <span className='text-[#F3CDA9] text-center'>Welcome to the Moodeng Foundation</span>
            </h1>
            <div className="text-center">A non-profit organization established by the ‘MOODENG ON ETH’ community which aims to bring real-world value to cryptocurrency, help others, and support charity."</div>
            
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#feca51] hover:bg-slate-800 rounded-[32px] gap-[12px]">
              <a href={'https://etherscan.io/address/0xfe737b0d2f4d2796726e079c895f7f49636fa0c3'} className="font-extrabold text-[16px] text-white ">
                DONATE
              </a>
              <img src="/logo.png" width={40} alt="" />
          </button>
            </div>
        </div>

      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute right-0 top-1/2 flex flex-col gap-4 z-50 m-3">
          <a href={links.telegram}  target="_blank">
          <BsTelegram className="text-2xl text-[#F3CDA9] hover:text-white" />
          </a>
          <a href={links.twitter}  target="_blank">
          <BsTwitter className="text-2xl text-[#F3CDA9] hover:text-white" />
          </a>
          <a href={links.uniswap}  target="_blank">
          <AiOutlineSwap className="text-2xl text-[#F3CDA9] hover:text-white" />
          </a>
          <a href={links.dextools}  target="_blank">
          <AiOutlineAreaChart className="text-2xl text-[#F3CDA9] hover:text-white" />
          </a>
          <a href='/pdf.pdf'  target="_blank">
          <GiWhiteBook className="text-2xl text-[#F3CDA9] hover:text-white" />
          </a>
      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <AiOutlineArrowDown className="w-full text-orange-500 text-5xl z-0" />
            </motion.div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;