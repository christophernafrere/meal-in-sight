'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BACKGROUND_COLOR = 0xf8f8f8;

export default function ARScene() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) {
            return undefined;
        }

        const width = mount.clientWidth || 360;
        const height = mount.clientHeight || 360;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(BACKGROUND_COLOR);

        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            1000,
        );
        const lookAtTarget = new THREE.Vector3(0, 0.3, 0);
        const cameraOffset = new THREE.Vector3();
        const offsetDirection = new THREE.Vector3();
        const tempCameraPosition = new THREE.Vector3();

        let minZoomDistance = 1.2;
        let maxZoomDistance = 6;

        // Reposition camera to keep framing consistent across screen sizes.
        const updateCameraFraming = (
            viewportWidth: number,
            keepDistance = false,
        ) => {
            const clampedWidth = THREE.MathUtils.clamp(
                viewportWidth,
                320,
                1280,
            );
            const distance = THREE.MathUtils.mapLinear(
                clampedWidth,
                320,
                1280,
                5.2,
                3.1,
            );
            const heightOffset = THREE.MathUtils.mapLinear(
                clampedWidth,
                320,
                1280,
                1.4,
                1.05,
            );
            cameraOffset.set(0, heightOffset, distance);
            const baseDistance = cameraOffset.length();
            offsetDirection.copy(cameraOffset).normalize();
            minZoomDistance = baseDistance * 0.7;
            maxZoomDistance = baseDistance * 1.55;
            const desiredDistance = keepDistance
                ? THREE.MathUtils.clamp(
                      camera.position.distanceTo(lookAtTarget),
                      minZoomDistance,
                      maxZoomDistance,
                  )
                : baseDistance;
            tempCameraPosition
                .copy(offsetDirection)
                .multiplyScalar(desiredDistance)
                .add(lookAtTarget);
            camera.position.copy(tempCameraPosition);
            camera.lookAt(lookAtTarget);
        };

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mount.appendChild(renderer.domElement);

        updateCameraFraming(width);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
        directionalLight.position.set(3, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 15;
        scene.add(directionalLight);

        const workPlanGeometry = new THREE.BoxGeometry(2, 0.8, 1);
        const workPlanMaterial = new THREE.MeshStandardMaterial({
            color: 0xff7043,
        });
        const workPlan = new THREE.Mesh(workPlanGeometry, workPlanMaterial);
        workPlan.position.y = 0.1;
        workPlan.castShadow = true;
        workPlan.receiveShadow = true;
        scene.add(workPlan);

        const capsuleGeometry = new THREE.CapsuleGeometry(0.4, 1.5, 8, 16);
        const capsuleMaterial = new THREE.MeshStandardMaterial({
            color: 0x4fc3f7,
        });
        const character = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
        character.position.set(0, 0.3, -1.2);
        character.castShadow = true;
        scene.add(character);

        const backingTrayGeometry = new THREE.BoxGeometry(0.5, 0.05, 0.8);
        const backingTrayMaterial = new THREE.MeshStandardMaterial({
            color: 0x90a4ae,
        });
        const backingTray = new THREE.Mesh(
            backingTrayGeometry,
            backingTrayMaterial,
        );
        backingTray.position.set(0, 0.5, 0);
        backingTray.castShadow = true;
        backingTray.receiveShadow = true;
        scene.add(backingTray);

        const panGeometry = new THREE.CylinderGeometry(0.17, 0.15, 0.08, 32);
        const panMaterial = new THREE.MeshStandardMaterial({ color: 0x616161 });
        const pan = new THREE.Mesh(panGeometry, panMaterial);
        pan.position.set(0, 0.54, 0);
        pan.castShadow = true;
        pan.receiveShadow = true;
        scene.add(pan);

        const panHandleGeometry = new THREE.CylinderGeometry(
            0.02,
            0.02,
            0.3,
            16,
        );
        const panHandleMaterial = new THREE.MeshStandardMaterial({
            color: 0x3e2723,
        });
        const panHandle = new THREE.Mesh(panHandleGeometry, panHandleMaterial);
        panHandle.position.set(0.22, 0.562, -0.02);
        panHandle.rotation.set(0.18, 0.25, -Math.PI / 2);
        panHandle.castShadow = true;
        scene.add(panHandle);
        let animationFrameId = 0;

        const animate = () => {
            animationFrameId = window.requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const zoomDirection = new THREE.Vector3();
        const nextCameraPosition = new THREE.Vector3();

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            const zoomDelta = event.deltaY * 0.002;
            const currentDistance = camera.position.distanceTo(lookAtTarget);
            const nextDistance = THREE.MathUtils.clamp(
                currentDistance + zoomDelta,
                minZoomDistance,
                maxZoomDistance,
            );
            if (Math.abs(nextDistance - currentDistance) < 1e-4) {
                return;
            }
            zoomDirection.copy(camera.position).sub(lookAtTarget).normalize();
            nextCameraPosition
                .copy(zoomDirection)
                .multiplyScalar(nextDistance)
                .add(lookAtTarget);
            camera.position.copy(nextCameraPosition);
        };

        const handleResize = () => {
            if (!mount) {
                return;
            }
            const newWidth = mount.clientWidth || 360;
            const newHeight = mount.clientHeight || 360;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
            updateCameraFraming(newWidth, true);
        };

        renderer.domElement.addEventListener('wheel', handleWheel, {
            passive: false,
        });
        window.addEventListener('resize', handleResize);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            renderer.domElement.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
            workPlanGeometry.dispose();
            workPlanMaterial.dispose();
            capsuleGeometry.dispose();
            capsuleMaterial.dispose();
            backingTrayGeometry.dispose();
            backingTrayMaterial.dispose();
            panGeometry.dispose();
            panMaterial.dispose();
            panHandleGeometry.dispose();
            panHandleMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}
