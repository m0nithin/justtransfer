import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls, Preload, Ring, Segment, Sparkles, Text, Torus, useGLTF, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { close, floor } from "../../assets";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';




const Computers = ({ isMobile, modelPaths, modelPosition }) => {
  return (
    <group>
      {modelPaths.map((modelPath, index) => (
        <>
          <primitive
            key={index}
            object={useGLTF(modelPath.path).scene}
            scale={isMobile ? 0.7 : 1}
            position={[
              (index - modelPosition) * 20,
              isMobile ? -1.5 : -3,
              0
            ]}
          />
          <Text 
            color="white"
            anchorX="center"
            anchorY="middle"
            scale={isMobile ? 0.4 : 0.6}
            position={[
              (index - modelPosition) * 10,
              isMobile ? 1 : 0,
              isMobile ? 1 : 1,
            ]}
          >
            {modelPath.name}
          </Text>
        </>
        
      ))}
    </group>
  );
};

const Floor =  ({isMobile}) =>{

  const floorTexture = useTexture(floor)
  return(
    <mesh position={isMobile ? [0, -1.5, 0] : [0, -3,0]} rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry args={isMobile? [3.5,3.5] : [8,8]}   />
        <meshStandardMaterial map={floorTexture} transparent={true}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const modelPaths = [
    {
      path : "./desktop_pc/moodeng.glb",
      name : "MooDeng",
      attact : 1.78,
      speed : 1.9,
      resistance : 1.99,
      stat1 : "MONEY",
      stat2 : "IQ",
      stat3 : "LOVE ROCKET",
    },
  ]

  const [modelPosition, setModelPosition] = useState(0);


  const handleScroll = (direction) => {
    if (direction === 'left') {
      setModelPosition((prevPosition) =>
        Math.max(prevPosition - 1, 0)
      );
    } else if (direction === 'right') {
      setModelPosition((prevPosition) =>
        Math.min(prevPosition + 1, modelPaths.length - 1)
      );
    }
  };

  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [0,20,0], fov: 25}}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.1}/>
          <spotLight
          position={[0, 0, 10]}
          angle={0.6}
          penumbra={1}
          intensity={1.4}
          castShadow
          shadow-mapSize={1024}
          />
          <spotLight
          position={[0, 10, 0]}
          angle={0.6}
          penumbra={1}
          intensity={1.4}
          castShadow
          shadow-mapSize={1024}
          />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
            <Computers isMobile={isMobile} modelPosition={modelPosition} modelPaths={modelPaths} />
          <Floor isMobile={isMobile} />
          <Sparkles color={'yellow'} count={100} scale={isMobile? [5,10,10] : [10,10,10]} size={20} speed={0.4} position={isMobile ? [0, -0.5, 0] : [0, -1,0]} />
        </Suspense>
       
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
