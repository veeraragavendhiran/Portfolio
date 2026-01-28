import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Geometry() {
  const mesh = useRef();
  const torus = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (torus.current) {
      torus.current.rotation.x = state.clock.elapsedTime * 0.08;
      torus.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={mesh} position={[2, 1, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshWobbleMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            factor={0.6}
            speed={1}
          />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={torus} position={[-2, -1, 0]}>
          <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.2}
            metalness={0.7}
            roughness={0.3}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

export const FloatingGeometry = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <Geometry />
      <fog attach="fog" args={['#0a0a0f', 5, 15]} />
    </Canvas>
  );
};