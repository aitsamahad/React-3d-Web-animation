import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

// for TAP/Hover Animation
import { useSpring, a } from "react-spring/three";

const Spinner = ({ position, args, color = "black", speed = 1 }) => {
  // For getting the reference of mesh
  const mesh = useRef(null);
  // Passing the referenced hook to useFrame hook to set the rotation of the referenced mesh.
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  // Managing States with useState Hook
  const [expand, setExpand] = useState(false);
  // Animation PROPS
  const props = useSpring({
    // scale: [height, width, depth]
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    // {/* Assigning useRef reference hook to mesh */}
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

export default Spinner;
