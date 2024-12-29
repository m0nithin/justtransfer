import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaClipboard } from 'react-icons/fa';

import { Tweet } from 'react-tweet'



const ServiceCard = ({ index, title, icon , attack , speed , reist , sub, stat1 , stat2 , stat3 }) => (
  <Tilt className='xs:w-[280px] w-full'>
    <div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-2 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='object-cover'
        />
      </div>
    </div>
  </Tilt>
);

const About = () => {

  const [text, setText] = useState('0xFE737b0d2F4D2796726E079c895F7F49636fA0C3');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('');
      })
      .catch(err => {
        setCopySuccess('Failed to copy text.');
        console.error('Error copying text: ', err);
      });
  };

  return (
    <>
            <h2 className={`${styles.sectionHeadText} text-lime-600`}>Vitalik Tweets about Moodeng.</h2>

      <div variants={textVariant()}>
        <div className="flex sm:flex-row flex-col gap-3">
      <Tweet id="1843260976206082216" />
      <Tweet id="1843262376898162916" />
        </div>
        {/* <p className={`${styles.sectionSubText} text-orange-100`}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText} text-lime-600`}>About.</h2>
      </div>
      <video className=" border border-blue-200 rounded-lg" width="640" height="360" controls>
        <source src="/about.mp4" type="video/mp4" />
        foundation
      </video>
      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
      >
The MOODENG Foundation is a groundbreaking charity that uses blockchain technology to protect the endangered pygmy hippopotamus, Moo Deng. By issuing ERC-20 tokens on the Ethereum network, the foundation ensures transparent fund management, allowing donors to track their contributions in real-time. Transitioning to a Decentralized Autonomous Organization (DAO), it empowers global community members to participate in decision-making through on-chain voting, promoting sustainability. Collaborating with animal protection organizations and employing an Automated Market Maker (AMM) mechanism, the foundation aims to generate continuous funding for conservation projects while raising awareness about the plight of Moo Deng.      </p>
      {/* <div className="z-50 flex gap-2 bg-orange-500 rounded p-3 font-extrabold">
        <p className="text-xs">{"multisig : 0xFE737b0d2F4D2796726E079c895F7F49636fA0C3"}</p>
        <button onClick={copyToClipboard}>
          <FaClipboard style={{ marginRight: '5px' }} />
        </button>
        {copySuccess && <span>{copySuccess}</span>}
      </div> */}
      
      <div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-orange-100`}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText} mt-5 text-lime-600`}>EVENTS & DONATIONS.</h2>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/donate.mp4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/2.mp4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/3.mp4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/4.mp4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/5.MP4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/6.MP4" type="video/mp4" />
        foundation
      </video>
      <video className=" border border-blue-200 rounded-lg" width="300" height="360" controls>
        <source src="/oct.mp4" type="video/mp4" />
        foundation
      </video>
      </div>
  
    </>
  );
};

export default SectionWrapper(About, "about");
