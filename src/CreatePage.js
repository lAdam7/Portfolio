import * as THREE from "three"
import { CSS3DObject } from "three/CSS3DRenderer"

const BASE_URL = "https://adam-lyon.com/portfolio-site/#/" /*(location.hostname === "localhost" || location.hostname === "127.0.0.1")
                  ? "http://localhost:3000/portfolio-site/#/"
                  : "https://adam-lyon.com/portfolio-site/#/"*/

export default class CreatePage {
	constructor(URL, pageWidth, pageHeight, pageName, domObjectRotation, domObjectPosition, scaleX, scaleY) {
		this.element = document.createElement("iframe");
        this.element.style.width = pageWidth + "px";
        this.element.style.height = pageHeight + "px";
        this.element.style.opacity = 1;
        this.element.name = pageName;
        this.element.src = BASE_URL + URL;

        this.domObject = new CSS3DObject(this.element);
        this.domObject.position.copy(domObjectPosition);
        this.domObject.rotation.set(0, domObjectRotation, 0);
        this.domObject.scale.x = scaleX;
        this.domObject.scale.y = scaleY;

        let material = new THREE.MeshPhongMaterial({
            opacity: 0.01,
            color: new THREE.Color("black"),
            blending: THREE.NoBlending,
            side: THREE.DoubleSide,
        });
        let geometry = new THREE.PlaneGeometry(pageWidth * scaleX, pageHeight * scaleY);

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.copy(this.domObject.rotation)
        this.mesh.position.copy(this.domObject.position);
        this.mesh.castShadow = false;
        this.mesh.receiveShadow = true;
	}

}
