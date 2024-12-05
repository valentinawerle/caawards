import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PicanteModel } from './PicanteModel';

export function PicanteModelCanvas({ className }) {
    return (
        <div className={className}>
            <Canvas
                camera={{
                    position: [15, 1, 0],
                    fov: 45,
                    near: 0.1,
                    far: 20
                }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={25} />
                <directionalLight position={[-5, -5, -5]} intensity={5} />
                <pointLight position={[0, 5, 0]} intensity={1} />
                <PicanteModel />
                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
}