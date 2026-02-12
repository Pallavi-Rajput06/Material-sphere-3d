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

const light = new THREE.DirectionalLight("white", 2);
light.position.set(2,2,2);
scene.add(light);
// const material = new THREE.MeshStandardMaterial();
// const material = new THREE.MeshPhysicalMaterial({color:"white"});
// material.metalness =0.5;
// material.roughness = 0;
// material.clearcoat = 1;


const geometry = new THREE.SphereGeometry(2,20,20);
const material = new THREE.MeshPhysicalMaterial({color:"white"});
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render (scene , camera);

const controls = new OrbitControls( camera, renderer.domElement );

// let clock = new THREE.Clock();

function animate(){
	window.requestAnimationFrame(animate);
	controls.update();
    
	// mesh.rotation.y = clock.getElapsedTime()*5;
    renderer.render(scene,camera);
}
animate();