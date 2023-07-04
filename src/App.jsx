import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FantasyBook from './modelComponents/FantasyBook'
import littlest_tokyo from './modelComponents/littlest_tokyo'

function App() {

  return (
    <>
    <Canvas>
      <color attach='background' args={['black']} />
      <OrbitControls />
      <ambientLight intensity={2} /> 
      <FantasyBook />
    </Canvas>
    </>
  )
}

export default App
