import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#1a3f63",
    caps: "#000000",
    inner: "#ffffff",
    sole: "#d4ff00",
    stripes: "#07ff83",
    band: "#ffffff",
    patch: "#ffffff",
  },
})

function Shoe() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function Picker() {
  return (
    <div style={{ display: "none" }}>
      <HexColorPicker
        className="picker"
        color="#ffffff"
      />
      <h1>MESH SELEZIONATA</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas>
        <Shoe />
      </Canvas>
      <Picker />
    </>
  )
}
