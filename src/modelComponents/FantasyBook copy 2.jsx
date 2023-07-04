import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const actionNames = ['The Life']

const FantasyBook = () => {
    const model = useGLTF('./sketchfab_5_million_members/scene.gltf')

    const animations = useAnimations(model.animations, model.scene)

    useFrame(()=>{
        actionNames.forEach((actionName) => {
            const action = animations.actions[actionName]
            action.play()
        })
    })

    return (
        <mesh>
            <primitive object={model.scene} />
        </mesh>
    )
}

export default FantasyBook