import * as THREE from "three"
import { CSS3DRenderer, CSS3DObject } from "three/CSS3DRenderer"
import { OrbitControls } from "three/OrbitControls"
import { GLTFLoader } from "three/GLTFLoader"
import { TWEEN } from "tween"

const BASE_URL = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
                  ? "http://localhost:3000/portfolio-site/#/"
                  : "https://adam-lyon.com/portfolio-site/#/"

let camera, scene, renderer;
var domObject;
let scene2, renderer2;
let mesh5;
let mouseX = 0,
  mouseY = 0;
let element;
let controls, controls2;

let sphere;

let lights = [];
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let running = false;
let lookAt = new THREE.Vector3(300, 400, 0);
//camera.position.set(500, 500, 500);
let lightMovementAmplitude = 200;
var tesstgeo, domObject2;
init();
animate(performance.now());

function degrees_to_radians(degrees)
    {
      var pi = Math.PI;
      return degrees * (pi/180);
    }

function init() {
  camera = new THREE.PerspectiveCamera(
    24,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.set(300, 500, 200);

  scene = new THREE.Scene();
  scene2 = new THREE.Scene();

  
  /*
  var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 600, 0 );
scene.add( hemiLight );*/

  // light
  //var ambientLight = new THREE.AmbientLight(0x000000);
  //scene.add(ambientLight);


  element = document.createElement("iframe");
  element.style.width = 1344 + "px";
  element.style.height = 765 + "px";
  element.style.opacity = 1;
  element.name = "iframe2";
  element.src = BASE_URL;

  domObject = new CSS3DObject(element);
  domObject.rotation.set(0, -degrees_to_radians(15), 0)
  domObject.translateX( 272.6 );
  domObject.translateY( 342 );
  domObject.translateZ( -213 );
  domObject.scale.x = .12;
  domObject.scale.y = .115;
  scene2.add(domObject);

  var material = new THREE.MeshPhongMaterial({
    opacity: 0.01,
    color: new THREE.Color("black"),
    blending: THREE.NoBlending,
    side: THREE.DoubleSide,
  });

  var geometry = new THREE.PlaneGeometry(161.28, (765*.115));
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(domObject.position);
  mesh.rotation.copy(domObject.rotation);
  //mesh.scale.copy( domObject.scale );
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
///////////////////////////////////////////////////
  var element2 = document.createElement("iframe");
  element2.style.width = "480px";
  element2.style.height = "705px";
  element2.style.opacity = 1;
  element2.src = BASE_URL + "home";  //"test.html";

  domObject2 = new CSS3DObject(element2);
  domObject2.rotation.set(0, degrees_to_radians(15), 0)
  domObject2.translateX( 216.6 );
  domObject2.translateY( 338.5 );
  domObject2.translateZ( -93 );
  domObject2.scale.x = .17;
  domObject2.scale.y = .17;
  scene2.add(domObject2);

  var material2 = new THREE.MeshPhongMaterial({
    opacity: 0.01,
    color: new THREE.Color("black"),
    blending: THREE.NoBlending,
    side: THREE.DoubleSide,
  });
  var geometry2 = new THREE.PlaneGeometry((480*.17)-1, (705*.17)-1);
  var mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.position.copy(domObject2.position);
  mesh2.rotation.copy(domObject2.rotation);
  //mesh.scale.copy( domObject.scale );
  mesh2.castShadow = false;
  mesh2.receiveShadow = true;
  scene.add(mesh2);
  ///////////////////////////////////////////

  // make a geometry to see if we can clip it with the DOM elememt.
  var material8 = new THREE.MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x000000,
    specular: 0x111111,
    side: THREE.DoubleSide,
    flatShading: false,
    //shininess: 30,
    metalness: 1
  });
  var geometry2 = new THREE.SphereGeometry(70, 32, 32);

  sphere = new THREE.Mesh(geometry2, material8);
 
  sphere.position.set(300, 500, 0);
  sphere.renderOrder = 500;
  //scene.add(sphere);


  const gltfLoader = new GLTFLoader();
  gltfLoader.load("roomv6.glb", function(gltf) {
    let asdas = 350

    gltf.scene.scale.set(asdas, asdas, asdas);
    gltf.scene.position.set(-850, 125, 2400);
    gltf.scene.rotation.set(0, -degrees_to_radians(90), 0);
    scene.add(gltf.scene); // add to mainBlock
}, undefined, function(error) {
    console.log(error);
})


const geometry5 = new THREE.BoxGeometry(284, 150, 1 );
const material5 = new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0, transparent: true } );
mesh5  = new THREE.Mesh( geometry5, material5 );
mesh5.translateX(272);
mesh5.translateY(340);
mesh5.translateZ(-160);
scene.add( mesh5 );


camera.position.set(mesh5.position.x, mesh5.position.y, 200);

mesh5.position.x = domObject2.position.x
  //

  renderer2 = new CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.domElement.style.position = "absolute";
  renderer2.domElement.style.top = 0;
  document.querySelector("#css").appendChild(renderer2.domElement);

  //let controls = new OrbitControls(camera, renderer2.domElement);
  //controls.target.set(-263, 300, 350);
  //controls.update();

  /*
  domObject.translateZ( -263 );
  domObject.translateX( 300 );
  domObject.translateY( 350 );
  */

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.outputEncoding = THREE.sRGBEncoding;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //renderer.shadowMap.enabled = true;
  
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  document.querySelector("#webgl").appendChild(renderer.domElement);

  //controls2 = new OrbitControls(camera, renderer.domElement);
  //controls2.target = mesh5.position;
  //controls2.target.set(200, 300, -2000);
  //camera.position.set(500, 500, 500);
  //controls2.update();

  document.addEventListener("mousemove", onDocumentMouseMove, false);

  const ambientLight = new THREE.AmbientLight( 0x404040  );
  ambientLight.intensity = 2;
  scene.add( ambientLight );
}




function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

let car = null;
function SpawnVehicle() {
  if (car !== null) {
    scene.remove(car)
  }

  let objects = [ "tractorPolice.glb", "fireEngine.glb", "sedan.glb", "truck.glb" ]
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(objects[Math.floor(Math.random()*objects.length)], function(gltf) {
    let asdas = 200

    gltf.scene.rotation.set(0, -degrees_to_radians(90), 0);
    gltf.scene.scale.set(asdas, asdas, asdas);
    gltf.scene.position.set(250, 125, -900); // -150 close
    scene.add(gltf.scene); // add to mainBlock
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
  

  camera.aspect = window.innerWidth / window.innerHeight; //Camera aspect ratio.

  camera.updateProjectionMatrix(); //Updating the display
  
  renderer.setSize(window.innerWidth, window.innerHeight) //Setting the renderer to the height and width of the window.
  renderer2.setSize(window.innerWidth, window.innerHeight)
}

window.onmessage = function(e) {
  if (e.data == "web#1") {
    //element.src = "http://adam-lyon.com/kf6012/part2/";
    element.src = BASE_URL + "projects";
    element.contentWindow.postMessage('ShowProjects', '*');
    new TWEEN.Tween(mesh5.position)
    .to(
        {
             x: domObject.position.x,
        },
        1000
    )
    .easing(TWEEN.Easing.Linear.None)
    .start()

  } else if (e.data == "BackTimeline") {
    element.src = BASE_URL;
    new TWEEN.Tween(mesh5.position)
    .to(
        {
             x: domObject2.position.x,
        },
        1000
    )
    .easing(TWEEN.Easing.Linear.None)
    .start()
  }
};

SpawnVehicle();
function animate(time) {
 // sphere.position.x += (mouseX - sphere.position.x) * 0.005;
  //sphere.position.y += (-mouseY - sphere.position.y) * 0.005;
  //console.log(camera.position)
  //lights[0].position.x = 200 * Math.sin(time * 0.003);
 // lights[0].position.y = 200 * Math.cos(time * 0.002);
 TWEEN.update();
 camera.lookAt(mesh5.position);
 
//controls2.update();
  //camera.lookAt(lookAt);

//mera.lookAt(mesh5.position);

  renderer.render(scene, camera);
  renderer2.render(scene2, camera);

  requestAnimationFrame(animate);
}