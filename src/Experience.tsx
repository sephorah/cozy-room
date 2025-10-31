import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import RoomModel from "./RoomModel";
import AudioComponent from "./components/AudioComponent";

import { useFrame, useThree } from "@react-three/fiber";

const CameraPositionLogger = () => {
  const { camera } = useThree();

  useFrame(() => {
    console.log(
      "Camera Position:",
      camera.position.x,
      camera.position.y,
      camera.position.z
    );
  });
  return null;
};

export const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault target={[0, 1.4, 0]} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <Sky />
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      <RoomModel />
      <ContactShadows opacity={0.35} scale={10} blur={5} far={8} />
      <AudioComponent />
      <CameraPositionLogger/>
    </>
  );
};
