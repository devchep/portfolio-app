import * as THREE from "three";
import Cube from "./Cube";

interface ThreeCanvasArgs {
    mountElement: HTMLDivElement;
    width: number;
    height: number;
  }

class ThreeCanvas {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private cube: Cube;

    constructor(args: ThreeCanvasArgs) {
        const { mountElement, width, height } = args;

        const scene = this.scene = new THREE.Scene();
        const camera = this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        const renderer = this.renderer = new THREE.WebGLRenderer();

        renderer.setSize( width, height );
        mountElement.appendChild(renderer.domElement)
        camera.position.z = 3;

        // add light
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 6);
        scene.add(light);

        // create cube
        this.cube = new Cube({camera, scene})

        this.animate()
    }

    resizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;

        // handle HD-DPI screens
        const pixelRatio = window.devicePixelRatio;
        const width = window.innerWidth * pixelRatio | 0;
        const height = window.innerHeight * pixelRatio | 0;

        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);

            // note: canvas CSS size doesn't include pixelRatio
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
        }
        return needResize;
      }

    animate() {
        this.cube.rotateCube()

        // handle resizing
        if (this.resizeRendererToDisplaySize()) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
          }

        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame( () => this.animate() );
    }
}

export default ThreeCanvas;