import {BoxGeometry, Mesh, Scene, PerspectiveCamera, MeshPhongMaterial} from "three";

interface CubeArgs {
    scene: Scene;
    camera: PerspectiveCamera;
}

class Cube {
    private cubeMesh: Mesh;

    constructor(args: CubeArgs) {
        const { scene, camera } = args;
        const geometry = new BoxGeometry();
        const material = new MeshPhongMaterial( { color: 0xff00ff } );
        const cubeMesh = this.cubeMesh = new Mesh( geometry, material );

        scene.add( cubeMesh );
    }

    rotateCube() {
        this.cubeMesh.rotation.x += 0.01;
        this.cubeMesh.rotation.y += 0.01;
    }
}

export default Cube