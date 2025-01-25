import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { AnimationMixer, Box3, Vector3 } from 'three';

// Carga y animación del modelo GLTF
function ModelWithAnimation({ path }) {
    const { scene, animations } = useGLTF(path); // Cargamos el modelo y las animaciones
    const mixer = useRef(null);

    // Inicializar el mixer de animaciones
    useEffect(() => {
        if (animations && animations.length) {
            mixer.current = new AnimationMixer(scene);
            animations.forEach((clip) => {
                mixer.current.clipAction(clip).play();
            });
        }
    }, [animations, scene]);

    // Ajustar la posición del modelo utilizando Box3
    useEffect(() => {
        if (scene) {
            // Crear un Box3 para calcular el bounding box
            const box = new Box3().setFromObject(scene);

            // Obtener el tamaño y el centro del modelo
            const size = new Vector3();
            const center = new Vector3();
            box.getSize(size);
            box.getCenter(center);

            // Ajustar la posición del modelo para centrarlo en el espacio
            scene.position.sub(center); // Mover el modelo al centro de la escena

            // Ajustar el modelo para que no esté demasiado arriba o fuera de la vista
            // Puedes modificar el valor de `y` para bajarlo más si es necesario
            scene.position.y -= size.y * -0.15; // Baja el modelo para que quede bien en la vista

            // Aquí podrías realizar más ajustes si es necesario (por ejemplo, cambiar la distancia de la cámara)
        }
    }, [scene]); // Recalcular cuando el modelo se carga

    // Actualizar la animación
    useEffect(() => {
        const animate = () => {
            if (mixer.current) {
                mixer.current.update(0.01); // Actualiza la animación
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return <primitive object={scene} />;
}

export default function BannerMain() {
    return (
        <Canvas
            camera={{ position: [3, 1, 2], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
        >
            <Suspense fallback={null}>
                {/* Luces */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <pointLight position={[2, 3, 2]} intensity={2} distance={10} />

                {/* Entorno (opcional, como HDR) */}
                <Environment preset="sunset" />

                {/* Cargar el modelo con animación */}
                <ModelWithAnimation path="/models/falling.glb" />

                {/* Controles de órbita, desactivar zoom */}
                <OrbitControls autoRotate enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}
