'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls, useTexture } from '@react-three/drei';
import { useCallback, useRef } from 'react';

function PortraitPlane() {
  const texture = useTexture('/sticker.webp');
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Градиентный слой 3 - глубокое свечение */}
      <mesh position={[0.08, -0.08, -0.2]}>
        <planeGeometry args={[2.6, 2.6]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent={true}
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Градиентный слой 2 - розовое свечение */}
      <mesh position={[-0.05, 0.05, -0.15]}>
        <planeGeometry args={[2.55, 2.55]} />
        <meshBasicMaterial
          color="#ff77c6"
          transparent={true}
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Стеклянный слой 1 - мягкая глубина */}
      <mesh position={[0.03, -0.03, -0.08]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshBasicMaterial
          color="#78dbff"
          transparent={true}
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Основное фото */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[2.45, 2.45]} />
        <meshBasicMaterial map={texture} transparent={true} alphaTest={0.1} />
      </mesh>
    </group>
  );
}

interface PortalFrameProps {
  onInteractionChange?: (isInteracting: boolean) => void;
}

export function PortalFrame({ onInteractionChange }: PortalFrameProps) {
  const handlePointerDown = useCallback(() => {
    onInteractionChange?.(true);
  }, [onInteractionChange]);

  const handlePointerUp = useCallback(() => {
    onInteractionChange?.(false);
  }, [onInteractionChange]);

  return (
    <div
      className="w-full aspect-square max-w-lg mx-auto"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <Canvas camera={{ fov: 85, position: [0, 0, 2] }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <PortraitPlane />
        <CameraControls
          makeDefault
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
          minDistance={2}
          maxDistance={2}
          azimuthRotateSpeed={0.3}
          polarRotateSpeed={0.3}
          dollySpeed={0}
          smoothTime={0.5}
        />
      </Canvas>
    </div>
  );
}
