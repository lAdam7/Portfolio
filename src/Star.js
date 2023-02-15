import * as THREE from "three"

export default class Star {
	constructor() {
		let geometrySphere   = new THREE.SphereGeometry(0.5, 32, 32)
        let materialSphere = new THREE.MeshBasicMaterial( {color: 0xffffff} );

        this.mesh = new THREE.Mesh(geometrySphere, materialSphere);

        this.mesh.position.x = (-500) + Math.random() * 710 - 355
        this.mesh.position.y = (600) + Math.random() * 300 - 150
        this.mesh.position.z = -1390
	}
}
