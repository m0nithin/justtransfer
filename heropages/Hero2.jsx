import { motion } from "framer-motion";

import { styles } from "../src/styles";
import { ComputersCanvas } from "../src/components/canvas";

const Hero2 = () => {
  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
\    <div className=" text-center justify-center items-center h-screen mt-10">
      <hr className="w-[70%] m-auto border-[1px] border-[#7954ff] rounded-lg" />
      <hr className="w-[60%] m-auto border-[2px] border-[#993fff] rounded-lg mt-[3px]" />
      <hr className="w-[40%] m-auto border-[3px] border-[#9f4bff] rounded-lg mt-[3px]" />
      <div className="space-y-10 flex-col justify-center p-10">
        <span className="text-[#D8BFD8] rounded-[10px] border-2 w-28 font-semibold p-2 max-[300px]:flex max-[600px]:justify-center">
          ✨ AI-Powered TRUTH GPT
        </span>
        <h1 className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center ">
          <span className="font-semibold text-7xl max-sm:text-[50px] max-sm:leading-[60px] leading-[100px] text-transparent bg-clip-text text-[#ffceff] bg-gradient-to-r from-violet-600 to-pink-200">
            Find The Real
          </span>{" "}
          <br className="sm:block hidden" />
          <h1 className="mb-10  font-semibold text-4xl ss:text-[72px] max-sm:text-[25px] leading-[100px] ss:leading-[100.8px] text-[#ffffff] ">
            TRUTH With
          </h1>
        </h1>
        <div className="title-wrapper text-center">
          <h1 className="sweet-title mb-8">
            <span data-text="TruthGPT" className=" max-sm:text-[70px]">
              TruthGPT
            </span>
          </h1>
        </div>
        <button className="rounded-[10px] w-44 p-3 bg-[#4907fd66] text-[#b4ffbe] border-transparent hover:text-white hover:bg-[#6e54ff]   transition duration-500 ease-in-out">
          <a href="https://t.me/TruthTellerGPT_bot" target="_blank">
          Find TRUTH
          </a>
        </button>
      </div>
      {/* <div className="flex-1 flex-col justify-center h-screen object-contain">
        <Canvas
          camera={{
            position: [0, -8, 5],
            fov: 30,
            zoom: 1.3,
            up: [0, 5, 4],
            near: 0.8,
          }}
          style={{ height: "140vh", width: "100%", marginTop: "10%" }}
        >
          <Experience />
        </Canvas>
      </div> */}
    </div>
    </section>
  );
};

export default Hero2;
