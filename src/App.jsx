import React from 'react'
import { Canvas } from '@react-three/fiber'
import {useGLTF, Stage, PresentationControls } from '@react-three/drei'
import Model from './components/Model' // use static import
// function Model(props) {
//   const { scene } = useGLTF('https://242035232.fs1.hubspotusercontent-na2.net/hubfs/242035232/bmw_m4_competition_m_package.glb');
//   return <primitive object={scene} {...props} />;
// }
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={['#101010']} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment="city">
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default App
