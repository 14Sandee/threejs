import React, { useRef } from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

export const Shoe = () => {
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/jordan_shoe.glb')

    const ref = useRef<any>(null)
    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime()
    //     ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    //     ref.current.position.y = (0.04 + Math.sin(t / 2)) / 10
    // })

    const handleMaterial = (e: any) => {
        e.stopPropagation()
        if (snap.intro) return
        state.current = e.object.material.name
        let currentColor = state.items[e.object.material.name as keyof typeof snap.items]
        state.items[e.object.material.name as keyof typeof snap.items] = '#cecece'
        setTimeout(() => {
            state.items[e.object.material.name as keyof typeof snap.items] = currentColor
        }, 200)
    }
    return (
        <>
            <group
                ref={ref}
                onPointerMissed={() => (state.current = 'side_flaps')}
                onClick={(e: any) => handleMaterial(e)}
            >
                <group position={[snap.intro ? 1 : 0, -0.51, 0.29]} rotation={[Math.PI / 2, 0, -1.61]} scale={0.61}>
                    <mesh receiveShadow castShadow geometry={nodes.Object001_4.geometry} material={materials.side} material-color={snap.items.side} />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_5.geometry}
                        material={materials.back_flipper}
                        material-color={snap.items.back_flipper}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_6.geometry}
                        material={materials.front_down}
                        material-color={snap.items.front_down}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_7.geometry}
                        material={materials.slashes}
                        material-color={snap.items.slashes}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_8.geometry}
                        material={materials.mini_flaps}
                        material-color={snap.items.mini_flaps}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_9.geometry}
                        material={materials.front_side}
                        material-color={snap.items.front_side}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_10.geometry}
                        material={materials.side_flaps}
                        material-color={snap.items.side_flaps}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_11.geometry}
                        material={materials.back_flip}
                        material-color={snap.items.back_flip}
                    />
                    <mesh receiveShadow castShadow geometry={nodes.Object001_12.geometry} material={materials.logo} material-color={snap.items.logo} />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_15.geometry}
                        material={materials.middle_sides}
                        material-color={snap.items.middle_sides}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_13.geometry}
                        material={materials.upper_side}
                        material-color={snap.items.upper_side}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_14.geometry}
                        material={materials.upper_soft}
                        material-color={snap.items.upper_soft}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_16.geometry}
                        material={materials.softy}
                        material-color={snap.items.softy}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_17.geometry}
                        material={materials.big_front}
                        material-color={snap.items.big_front}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_18.geometry}
                        material={materials.upper_bottom_bottom}
                        material-color={snap.items.upper_bottom_bottom}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_19.geometry}
                        material={materials.bottooom}
                        material-color={snap.items.bottooom}
                    />
                    <mesh
                        receiveShadow
                        castShadow
                        geometry={nodes.Object001_20.geometry}
                        material={materials.bottom_logo}
                        material-color={snap.items.bottom_logo}
                    />
                </group>
            </group>
        </>
    )
}
