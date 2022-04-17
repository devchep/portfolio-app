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

        this.cube = new Cube({camera, scene})

        this.animate()
    }

    animate() {
        this.cube.rotateCube()
        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame( () => this.animate() );
    }
}

export default ThreeCanvas;