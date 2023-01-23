import Head from 'next/head'
import { Inter } from '@next/font/google'
import { About, Header, Navbar, Projects } from '../components';
import { useEffect } from 'react';
import * as THREE from 'three';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg')
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize(){

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth, window.innerHeight );
  
  }

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  });



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='root'>
        <canvas id='bg'></canvas>
        <Navbar />
        <Header />
        <About />
        <Projects />
      </div>
    </>
  )
}
