import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import programmer from "../../assets/3d/lost_programmer.glb";
import { useIsMobile } from "../../hooks";

const Programmer = () => {
  const { isMobile } = useIsMobile();
  const gltf = useLoader(GLTFLoader, programmer);
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });
  return (
    <>
      <spotLight position={[5, 10, 7.5]} />
      <spotLight position={[-3, 10, -7.5]} />
      <pointLight color={"#f00"} position={[0, 0.6, 0]} distance="1.5" />
      {isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} />}
      <primitive object={gltf.scene} scale={isMobile ? 1.5 : 1} ref={ref} />
    </>
  );
};

export default Programmer;