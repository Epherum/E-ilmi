import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  Image as ImageImpl,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      Math.max(0, 1 - data.delta * 50),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, navigate, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
        onClick={() => navigate("/")}
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
    </group>
  );
}

function Pages({ navigate }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={["images/1.jpg", "images/2.jpg", "images/3.jpg"]}
        navigate={navigate}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={["images/1.jpg", "images/2.jpg", "images/3.jpg"]}
        navigate={navigate}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={["images/4.jpg", "images/5.jpg", "images/6.jpg"]}
        navigate={navigate}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={["images/1.jpg", "images/2.jpg", "images/3.jpg"]}
        navigate={navigate}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={["images/1.jpg", "images/2.jpg", "images/3.jpg"]}
        navigate={navigate}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={["images/4.jpg", "images/5.jpg", "images/6.jpg"]}
        navigate={navigate}
      />
    </>
  );
}

export default function App() {
  let navigate = useNavigate();

  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Pages navigate={navigate} />
          </Scroll>
          <Scroll html>
            <h1
              style={{
                position: "absolute",
                fontSize: "5rem",
                top: "20vh",
                left: "-75vw",
              }}
            >
              home
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
