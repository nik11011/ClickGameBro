import {BoxGeometry, Mesh, MeshPhysicalMaterial, type Vector3} from "three";


export class Bullet {

    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _direction: Vector3;

    private _mesh: Mesh;


    constructor(target: Vector3) {
        this._geometry = new BoxGeometry(0.2,0.2,0.2);
        this._material = new MeshPhysicalMaterial({
            wireframe: true
        });

        this._direction = target;

        this._mesh = new Mesh(this._geometry, this._material);
    }

    public updateFly(delta: number) {
        this._mesh.position = this._mesh.position.lerp(this._direction, delta);
    }
}