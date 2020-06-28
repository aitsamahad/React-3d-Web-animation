import React from "react";
import "./App.scss";

// Import Canvas
import { Canvas } from "react-three-fiber";

// Importing Spinner Box
import Spinner from "./components/spinner/Spinner";

// Importing Drei
import { Text } from "drei";

// Importing softShadows and meshWobble from Drei
import { softShadows, OrbitControls } from "drei";
softShadows();

function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
        className="canvas"
      >
        {/* Surrounding Light */}
        <ambientLight intensity={0.3} />
        {/* Directional Light to cast shadows */}
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Pointing Light */}
        {/* From Left */}
        {/* position={[x,y,z]} */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        {/* From Right or lets say its right now on bottom */}
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        {/* Floor for shadow casting */}
        <group className="canvas">
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          {/* Three spinning boxes */}
          <Spinner
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
            speed={2}
          />
          <Spinner position={[-2, 1, -5]} color="pink" speed={6} />
          <Spinner position={[5, 1, -2]} color="pink" speed={6} />
          <Text
            color="black" // default
            anchorX="center" // default
            fontSize={3.2}
            font="https://fonts.googleapis.com/css2?family=Fira+Code"
            anchorY="middle" // default
            className="canvas"
          >
            Aitsam Ahad
          </Text>
          <Spinner position={[-4, 5, -10]} color="pink" speed={6} />
          <Spinner position={[10, 5, -4]} color="pink" speed={6} />
          <Spinner position={[-1, -5, 1]} color="pink" speed={6} />
          <Spinner position={[2, -5, 2]} color="pink" speed={6} />
          <OrbitControls />
        </group>

        {/* <Box>
          <meshStandardMaterial attach="material" />
        </Box> */}
      </Canvas>
    </>
  );
}

export default App;
