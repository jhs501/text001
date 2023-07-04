import { useGLTF } from "@react-three/drei";

const FantasyBook = () => {
    const model = useGLTF('./medieval_fantasy_book/scene.gltf')
    return (
        <mesh>
            <primitive object={model.scene} />
        </mesh>
    )
}

export default FantasyBook