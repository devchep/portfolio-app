import {BoxGeometry, MeshBasicMaterial, Mesh, Scene, PerspectiveCamera} from "three";

interface CubeArgs {
    scene: Scene;
    camera: PerspectiveCamera;
}

class Cube {
    private cubeMesh: Mesh;

    constructor(args: CubeArgs) {
        const { scene, camera } = args;
        const geometry = new BoxGeometry();
        const material = new MeshBasicMaterial( { color: 0xff00ff } );
        const cubeMesh = this.cubeMesh = new Mesh( geometry, material );

        scene.add( cubeMesh );
        camera.position.z = 5;
    }

    rotateCube() {
        this.cubeMesh.rotation.x += 0.01;
        this.cubeMesh.rotation.y += 0.01;
    }
}

export default Cube