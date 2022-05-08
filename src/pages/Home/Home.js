import React, { Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
import BookScene from "./components/BookScene";
import Categories from "./components/Categories";
import Pictures from "./components/Pictures";

const App = () => {
  let navigate = useNavigate();
  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#abcbcf"]} />
          {/* fcf8f5 abcbcf b4d0d4 bdd5d9 */}
          <ScrollControls damping={6} pages={3}>
            <Scroll html style={{ width: "100%", height: "100%" }}>
              <Hero />
              <BookScene navigate={navigate} />
              <Categories navigate={navigate} />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
