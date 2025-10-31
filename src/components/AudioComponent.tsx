import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { AudioListener, AudioLoader, Audio } from "three";

const AudioComponent = () => {
  const { camera } = useThree();

  useEffect(() => {
    const listener = new AudioListener();
    camera.add(listener);

    const sound = new Audio(listener);

    const audioLoader = new AudioLoader();

    audioLoader.load("/audio.ogg", (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      const handleClick = () => {
        if (!sound.isPlaying) {
          sound.play();
        }
      };
      window.addEventListener("click", handleClick);
    });
  }, []);

  return null;
};

export default AudioComponent;
