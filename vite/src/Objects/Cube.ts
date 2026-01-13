import {BoxGeometry, Mesh, MeshLambertMaterial} from "three";

export class Cube {
    private _geometry: BoxGeometry;
    private _material: MeshLambertMaterial;

    private _mesh: Mesh;

    constructor(color) {
        this._geometry = new BoxGeometry(1,1,1);
        this._material = new MeshLambertMaterial({color: color});

        this._mesh = new Mesh(this._geometry, this._material);
    }

    public get mesh(){
        return this._mesh;
    }

    public get material(){
        return this._material;
    }
}