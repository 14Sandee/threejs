import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { Shoe } from './Shoe'
import { useSnapshot } from 'valtio'
import state from '../store'

export const CanvasModel = () => {
    const snap = useSnapshot(state)
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 4], fov: 50 }}
            className='w-full max-w-full h-full transition-all ease-in'
        >
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Environment preset="sunset" />
            <ContactShadows position={[0, -0.8, 0]} opacity={0.45} scale={15} blur={1.5} far={0.9} color="white" />
            {!snap.intro && <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 1} enableZoom={true} enablePan={false} />}
            <Shoe />
        </Canvas>
    )
}
