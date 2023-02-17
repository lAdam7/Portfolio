import * as THREE from "../libraries/three.js"

export default class Camera {
	constructor() {
		this.camera = new THREE.PerspectiveCamera(
            24,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );

	}

    updateAspect() {
        this.camera.aspect = window.innerWidth / window.innerHeight; // Camera aspect ratio
        this.camera.updateProjectionMatrix(); // Update the display    
    }

    setPosition(camPosition) {
        this.camera.position.copy(camPosition);
    }

    lookAt(targetPosition) {
        this.camera.lookAt(targetPosition);
    }
}
