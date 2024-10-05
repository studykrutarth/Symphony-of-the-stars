import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Create Stars Using a Particle System
const starsGeometry = new THREE.BufferGeometry();
const starCount = 2000; // Increased number of stars
const positions = new Float32Array(starCount * 3); // 3 values (x, y, z) for each star

for (let i = 0; i < starCount; i++) {
  positions[i * 3] = THREE.MathUtils.randFloatSpread(200); // x
  positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(200); // y
  positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(200); // z
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// JavaScript for zoom effect

// Select all images in the collage
const collageImages = document.querySelectorAll('.collage-container img');

// Iterate over each image and apply the hover effect
collageImages.forEach((img) => {
  let timeoutId; // Store the timeout ID

  // Check the image's position within the container and adjust transform-origin
  const imgPosition = img.getBoundingClientRect().left + img.offsetWidth / 2;
  const screenWidth = window.innerWidth;

  if (imgPosition < screenWidth / 3) {
    img.classList.add('left'); // Image is on the left side of the screen
  } else if (imgPosition > (screenWidth / 3) * 2) {
    img.classList.add('right'); // Image is on the right side of the screen
  }

  // Mouse enter event - start zooming to full size after 1 second
  img.addEventListener('mouseenter', () => {
    // Clear any previous timeout if the mouse enters before the 1 sec delay
    clearTimeout(timeoutId);

    // Start the timer for 1 second
    timeoutId = setTimeout(() => {
      img.classList.add('zoomed'); // Zoom in after 0.5 second
    }, 500); // 0.5 second delay
  });

  // Mouse leave event - reset zoom when mouse leaves
  img.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId); // Clear timeout if mouse leaves early
    img.classList.remove('zoomed'); // Remove the zoom effect when mouse leaves
  });
});

document.getElementById('image1').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image2').addEventListener('click', function() {
  window.open('https://flic.kr/p/2nZBx32', '_blank'); // Replace with your desired URL
});

document.getElementById('image3').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image4').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image5').addEventListener('click', function() {
  window.open('https://flic.kr/p/2nYgUQB', '_blank'); // Replace with your desired URL
});

document.getElementById('image6').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image7').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image8').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image9').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image10').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image11').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image12').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image13').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image14').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image15').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image16').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image17').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image18').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image19').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image20').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

document.getElementById('image21').addEventListener('click', function() {
  window.open('https://flic.kr/p/2o3hyLq', '_blank'); // Replace with your desired URL
});

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  // controls.update();

  renderer.render(scene, camera);
}

animate();