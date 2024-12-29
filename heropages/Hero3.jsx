import { motion } from "framer-motion";
import { styles } from "../styles";
import { links } from "../constants";
import { ComputersCanvas } from "./canvas";
import { imgAnim } from "../utils/motion";


const Hero3 = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#51bfc9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=" flex sm:flex-row flex-col-reverse">
            <div className="flex flex-col gap-3">
            <h1 className={`${styles.heroHeadText} text-white`}>
                <span className='text-[#51bfc9ff]'>Female Zoras</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                "Meet the graceful female Zoras of Hyrule,<br className='sm:block hidden' />
                 known for their aquatic culture and musical<br className='sm:block hidden' />
                  talents, in the legendary Legend of Zelda series.
            </p>
            <p className={`flex sm:text-lg text-[0.7rem] text-white-100 border border-gray-50 w-fit p-1 `}>{links.ca}</p>
            <div className=" flex gap-3 mt-6">
                <button className="rounded-[10px] w-fit p-3 bg-[#51bfc9ff] text-[#b4ffbe] border-transparent hover:text-white hover:bg-[#6e54ff]   transition duration-500 ease-in-out">
                    <a href={links.telegram} target="_blank">
                    Telegram
                    </a>
                </button>
                <button className="rounded-[10px] w-fit p-3 bg-[#51bfc9ff] text-[#b4ffbe] border-transparent hover:text-white hover:bg-[#6e54ff]   transition duration-500 ease-in-out">
                    <a href={links.dextools} target="_blank">
                    Chart
                    </a>
                </button>
                <button className="rounded-[10px] w-fit p-3 bg-[#51bfc9ff] text-[#b4ffbe] border-transparent hover:text-white hover:bg-[#6e54ff]   transition duration-500 ease-in-out">
                    <a href={links.uniswap} target="_blank">
                    BUY
                    </a>
                </button>
            </div>
            </div>
            <motion.div
                variants={imgAnim}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{
                    scale: [0, 1],
                    opacity: 1,
                }}
                transition={{ duration: 0.84, delay: 0.1 }}
                className="flex-1 flex flex-row justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0 md:mr-4"
                style={{
                    paddingRight: "2rem",
                    marginLeft: "auto",
                    paddingLeft: "2rem",
                }}
            >
            <img
                src='/zora1.png'
                alt="3D-Tee"
                className=" object-contain"
            />
            </motion.div>
        </div>

      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero3;