import * as THREE from "three";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth/window.innerHeight,
	0.1,
	100
);

camera.position.z = 6;

// const light = new THREE.DirectionalLight("white", 2);
// light.position.set(2,2,2);
// scene.add(light);
// const material = new THREE.MeshStandardMaterial();
// const material = new THREE.MeshPhysicalMaterial({color:"white"});
// material.metalness =0.5;
// material.roughness = 0;
// material.clearcoat = 1;


const geometry = new THREE.BoxGeometry(2,2,3);
const material = new THREE.MeshBasicMaterial({color:"white" ,wireframe:true });
const mesh = new THREE.Mesh(geometry,material);
// mesh.lookAt(-1,1, 0);
scene.add(mesh);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render (scene , camera);

const controls = new OrbitControls( camera, renderer.domElement );

const mouse = {
	x:0,
	y:0,
}

window.addEventListener("mousemove",function(e){
	mouse.x=e.clientX/window.innerWidth;
	mouse.y=e.clientY/window.innerHeight;
})
// let clock = new THREE.Clock();

function animate(){
	window.requestAnimationFrame(animate);
	controls.update();
    mesh.lookAt(new THREE.Vector3(mouse.x -0.5 , -mouse.y+0.5 , 1))
	// mesh.rotation.y = clock.getElapsedTime()*5;
    renderer.render(scene,camera);
}
animate();