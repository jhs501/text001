import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const actionNames = ['Take 001']

const littlest_tokyo = () => {
    const model = useGLTF('./sketchfab_3d_editor_challenge_littlest_tokyo/scene.gltf')

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

export default littlest_tokyo