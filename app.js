import * as THREE from "three"
import { CSS3DRenderer, CSS3DObject } from "three/CSS3DRenderer"
import { OrbitControls } from "three/OrbitControls"
import { GLTFLoader } from "three/GLTFLoader"
import { TWEEN } from "tween"

import Camera  from "./src/Camera.js"
import CreatePage from "./src/CreatePage.js"
import Star from "./src/Star.js"

const cCamera = new Camera(THREE);

const leftScreen = new CreatePage("home", 612, 898.875, "iframe", degrees_to_radians(15), new THREE.Vector3(185.14936277967774, 338.5, -145.89130701408934), .133, .133)
const rightScreen = new CreatePage("", 1344, 765, "iframe2", -degrees_to_radians(15), new THREE.Vector3(318.4398368532369, 342, -135.1881293046244), .12, .115);
                
let CSS3Drenderer, WEBGLrenderer, WEBGLscene, CSS3Dscene, camFocusMesh;

init();
animate(performance.now());

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}
    

function init() {
  WEBGLscene = new THREE.Scene();
  CSS3Dscene = new THREE.Scene();
  
  CSS3Dscene.add(leftScreen.domObject);
  WEBGLscene.add(leftScreen.mesh);

  CSS3Dscene.add(rightScreen.domObject);
  WEBGLscene.add(rightScreen.mesh);

  const gltfLoader = new GLTFLoader();
  gltfLoader.load("assets/room.glb", function(gltf) {
    let asdas = 350

    gltf.scene.scale.set(asdas, asdas, asdas);
    gltf.scene.position.set(-850, 125, 2400);
    gltf.scene.rotation.set(0, -degrees_to_radians(90), 0);
    WEBGLscene.add(gltf.scene);
}, undefined, function(error) {
    console.log(error);
})


  const camFocusGeometry = new THREE.BoxGeometry(284, 150, 1 );
  const camFocusMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0, transparent: true } );
  camFocusMesh  = new THREE.Mesh( camFocusGeometry, camFocusMaterial );
  camFocusMesh.position.copy(new THREE.Vector3(185.14936277967774, 340, -160));
  WEBGLscene.add( camFocusMesh ); 

  cCamera.setPosition(new THREE.Vector3(camFocusMesh.position.x, camFocusMesh.position.y, 200));

  // Create stars in background
  for ( var z = 0; z < 500; z++) {
    WEBGLscene.add(new Star().mesh);
  }

  CSS3Drenderer = new CSS3DRenderer();
  CSS3Drenderer.setSize(window.innerWidth, window.innerHeight);
  CSS3Drenderer.domElement.style.position = "absolute";
  CSS3Drenderer.domElement.style.top = 0;
  document.querySelector("#css").appendChild(CSS3Drenderer.domElement);

  WEBGLrenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  WEBGLrenderer.outputEncoding = THREE.sRGBEncoding;
  WEBGLrenderer.setPixelRatio(window.devicePixelRatio);
  WEBGLrenderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#webgl").appendChild(WEBGLrenderer.domElement);

  const ambientLight = new THREE.AmbientLight( 0x404040  );
  ambientLight.intensity = 2;
  WEBGLscene.add( ambientLight );
}

let car = null;
function SpawnVehicle() {
  if (car !== null) {
    WEBGLscene.remove(car)
  }

  let objects = [ "tractorPolice", "fireEngine", "sedan", "truck" ]
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("assets/" + objects[Math.floor(Math.random()*objects.length)] + ".glb", function(gltf) {
    let asdas = 200

    gltf.scene.rotation.set(0, -degrees_to_radians(90), 0);
    gltf.scene.scale.set(asdas, asdas, asdas);
    gltf.scene.position.set(250, 125, -900); // -150 close
    WEBGLscene.add(gltf.scene); // add to mainBlock
    car = gltf.scene
    
    new TWEEN.Tween(gltf.scene.position)
      .to(
          {
              x: -900,
          },
          4000
      )
      .easing(TWEEN.Easing.Linear.None)
      .delay(Math.floor(Math.random()*3000))
      .onComplete(() => {
        return SpawnVehicle();
      })
      .start()
  }, undefined, function(error) {
    console.log(error);
  })
}

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  cCamera.updateAspect();
  
  WEBGLrenderer.setSize(window.innerWidth, window.innerHeight) //Setting the renderer to the height and width of the window.
  CSS3Drenderer.setSize(window.innerWidth, window.innerHeight)
}

window.onmessage = function(e) {
  if (e.data == "projects" || e.data == "experiences") {

    element.src = BASE_URL + e.data; // Transition to right screen and show either experiences / projects

    new TWEEN.Tween(camFocusMesh.position)
    .to(
        {
             x: rightScreen.domObject.position.x,
        },
        1000
    )
    .easing(TWEEN.Easing.Linear.None)
    .start()

  } else if (e.data == "BackTimeline") {
    element.src = BASE_URL;
    new TWEEN.Tween(camFocusMesh.position)
    .to(
        {
             x: leftScreen.domObject.position.x, // Transition to left screen and show basic info
        },
        1000
    )
    .easing(TWEEN.Easing.Linear.None)
    .start()
  }
};

function animate() {
  TWEEN.update();
  cCamera.lookAt(camFocusMesh.position);
 
  WEBGLrenderer.render(WEBGLscene, cCamera.camera);
  CSS3Drenderer.render(CSS3Dscene, cCamera.camera);

  requestAnimationFrame(animate);
}

SpawnVehicle();