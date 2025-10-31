import { useGLTF } from "@react-three/drei";

const RoomModel = () => {
  const model = useGLTF("./cozy_room_draco.glb");

  return <primitive object={model.scene} />;
};

export default RoomModel;
