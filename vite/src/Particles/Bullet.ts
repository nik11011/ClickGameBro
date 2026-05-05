import {BoxGeometry, Mesh, MeshPhysicalMaterial} from "three";


export class Bullet {

    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _mesh: Mesh;


    constructor() {
        this._geometry = new BoxGeometry(0.2,0.2,0.2);
        this._material = new MeshPhysicalMaterial({
            wireframe: true
        });
        this._mesh = new Mesh(this._geometry, this._material);
    }

    
}