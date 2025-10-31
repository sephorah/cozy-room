import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [3.47, 4.15, 4.22] }}>
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
