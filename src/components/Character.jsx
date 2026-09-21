import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce } from "three";

function Character({ onAnimationComplete }) {
  const group = useRef();

  const { scene, animations } = useGLTF(
    "/models/character.glb"
  );

  const { actions } = useAnimations(
    animations,
    group
  );

  useEffect(() => {
    const animationNames = Object.keys(actions);

    console.log(
      "Available animations:",
      animationNames
    );

    if (animationNames.length === 0) {
      const timer = setTimeout(() => {
        onAnimationComplete?.();
      }, 2000);

      return () => clearTimeout(timer);
    }

    const action = actions[animationNames[0]];

    if (!action) {
      onAnimationComplete?.();
      return;
    }

    action.reset();
    action.setLoop(LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();

    console.log(
      "Playing animation:",
      animationNames[0]
    );

    const mixer = action.getMixer();

    const handleFinished = () => {
      console.log("Animation completed");

      onAnimationComplete?.();
    };

    mixer.addEventListener(
      "finished",
      handleFinished
    );

    return () => {
      mixer.removeEventListener(
        "finished",
        handleFinished
      );

      action.stop();
    };
  }, [actions, onAnimationComplete]);

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={0.45}
        position={[0, -1.2, 0]}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/character.glb"
);

export default Character;