"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import * as THREE from "three";
const BASE_ROTATION = -5.35; // adjust this until centered
interface EarthMeshProps {
	scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function EarthMesh({ scrollYProgress }: EarthMeshProps) {
	const meshRef = useRef<THREE.Mesh>(null);

    const [color, normal, aoMap] = useLoader(TextureLoader, [
		"/img/earth/color.jpg",
		"/img/earth/normal.jpg",
		"/img/earth/occlusion.jpg",
	]);

	useEffect(() => {
		// const controls = animate(0, Math.PI * 2, {
		// 	duration: 30,
		// 	repeat: Infinity,
		// 	ease: "linear",
		// 	onUpdate: (v: number) => {
		// 		if (meshRef.current) meshRef.current.rotation.y = v;
		// 	},
		// });
        // return () => controls.stop();
        if (meshRef.current) {
			// meshRef.current.rotation.y += scrollYProgress.get() * 0.01;
			meshRef.current.rotation.y = BASE_ROTATION;
		}
	}, []);

	useFrame(() => {
		if (meshRef.current) {
            // meshRef.current.rotation.y += scrollYProgress.get() * 0.01;
            const rotation = -((scrollYProgress.get() / 4) * Math.PI * 2) - BASE_ROTATION;
            meshRef.current.rotation.y = rotation;
		}
	});

	return (
		<mesh ref={meshRef} scale={2.75}>
			<sphereGeometry args={[1, 64, 64]} />
			<meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
		</mesh>
	);
}

export default function Earth() {
	const scene = useRef<HTMLCanvasElement>(null);

	const { scrollYProgress } = useScroll({
		target: scene,
		offset: ["start end", "end start"],
	});

	return (
		<Canvas ref={scene}>
			<ambientLight intensity={.1} />
			<directionalLight intensity={7} position={[1, 0.25, 0.5]} />
			<EarthMesh scrollYProgress={scrollYProgress} />
		</Canvas>
	);
}
