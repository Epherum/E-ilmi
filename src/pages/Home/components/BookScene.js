import * as THREE from "three";
import React, { useRef, useEffect, Suspense } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

import { Canvas, useThree, useLoader } from "@react-three/fiber";
import img from "./41qiZpKBDvL.jpg";

const Controls = () => {
  const { camera } = useThree();
  const controlsRef = useRef();
  let x = 300;
  let y = 300;

  useEffect(() => {
    controlsRef.current.addEventListener("change", function () {
      if (this.target.x < -x) {
        this.target.x = -x;
        camera.position.x = -x;
      } else if (this.target.x > x) {
        this.target.x = x;
        camera.position.x = x;
      }
      if (this.target.y < -y) {
        this.target.y = -y;
        camera.position.y = -y;
      } else if (this.target.y > y) {
        this.target.y = y;
        camera.position.y = y;
      }
    });
  });

  return (
    <OrbitControls ref={controlsRef} enableZoom={false} enableRotate={false} />
  );
};

const Scene = ({ navigate }) => {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <div
      style={{
        position: "absolute",
        top: "56vw",
        height: "110%",
        width: "100%",
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <motion.mesh
            position={[0, 0, 0]}
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              navigate("/Categories/Young-Adult/Things-We-Never-got-Over")
            }
          >
            <planeBufferGeometry attach="geometry" args={[3.7, 5.9, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <Html>
            <h1
              style={{
                textAlign: "left",
                position: "absolute",
                top: "22vw",
                left: "-13.1vw",
                width: "20vw",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "1.2vw",
                letterSpacing: ".02vw",
              }}
            >
              Things We Never Got Over
            </h1>
            <h1
              style={{
                textAlign: "left",
                position: "absolute",
                top: "24vw",
                left: "-13vw",
                width: "20vw",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "1vw",
                letterSpacing: ".03vw",

                color: "#cacaca",
              }}
            >
              Lucy Score
            </h1>
          </Html>
          <motion.mesh position={[3.9, 0.8, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[3.9, -2.6, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[6.3, -0.3, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[6.3, 2.8, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[-3.9, 0.8, 0]} whileHover={{ scale: 1.03 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[-3.9, -2.6, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[-6.3, -0.3, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <motion.mesh position={[-6.3, 2.8, 0]} whileTap={{ scale: 0.9 }}>
            <planeBufferGeometry args={[1.4, 2.1, 10, 10]} />
            <meshBasicMaterial attach="material" map={texture} />
          </motion.mesh>
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
