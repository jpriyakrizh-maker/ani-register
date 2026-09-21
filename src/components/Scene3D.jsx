import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Character from "./Character";
import "./Scene3D.css";

function Scene3D({ onAnimationComplete }) {
  return (
    <div className="scene-container">
      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 7]}
          fov={45}
        />

        {/* Lights */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-4, 2, 3]}
          intensity={2}
        />

        <pointLight
          position={[4, 1, -2]}
          intensity={2}
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Character */}
        <Character
          onAnimationComplete={onAnimationComplete}
        />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;