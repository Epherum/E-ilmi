import * as THREE from "three";
import React, { useRef } from "react";
import { Scroll, useIntersect, Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function Pictures() {
  function Item({ url, scale, ...props }) {
    const visible = useRef(false);
    const ref = useIntersect((isVisible) => (visible.current = isVisible));
    const { height } = useThree((state) => state.viewport);
    useFrame((state, delta) => {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible.current ? 0 : -height / 2 + 1,
        4,
        delta
      );
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom,
        visible.current ? 1 : 1.5,
        4,
        delta
      );
    });

    return (
      <group {...props}>
        <Image ref={ref} scale={scale} url={url} />
      </group>
    );
  }

  function Items() {
    const { width: w, height: h } = useThree((state) => state.viewport);
    return (
      <Scroll>
        {/* <Item
          url="/1.jpg"
          scale={[w / 3, w / 3, 1]}
          position={[-w / 3, 0, 3]}
        /> */}
        {/* <Item url=" 2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
        <Item
          url=" 3.jpg"
          scale={[w / 3, w / 5, 1]}
          position={[-w / 4, -h * 1, 0]}
          />
          <Item
          url=" 4.jpg"
          scale={[w / 5, w / 5, 1]}
          position={[w / 4, -h * 1.2, 0]}
        />
        <Item
          url=" 5.jpg"
          scale={[w / 5, w / 5, 1]}
          position={[w / 10, -h * 1.75, 0]}
        /> */}
        <Item
          url="images/6.jpg"
          scale={[w / 4, w / 4, 1]}
          position={[-w / 3, -h * 1.9, 0]}
        />
        <Item
          url="images/7.jpg"
          scale={[w / 3, w / 5, 1]}
          position={[w / 4, -h * 2.2, 0]}
        />
        <Item
          url="images/8.jpg"
          scale={[w / 2, w / 2, 1]}
          position={[w / 4, -h * 3.1, 0]}
        />
        <Item
          url="images/12.jpg"
          scale={[w / 2.5, w / 2, 1]}
          position={[-w / 6, -h * 4.1, 0]}
        />
      </Scroll>
    );
  }
  return <Items />;
}

export default Pictures;
