import {BoxGeometry, Mesh, MeshPhysicalMaterial} from "three";

export class Enemy{
    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _mesh: Mesh;

    constructor(color) {
        this._geometry = new BoxGeometry(1,1,1);
        this._material = new MeshPhysicalMaterial({
            color: color,
            roughness: 1.0,
            metalness: 0.0,
            clearcoat: 0.0,
            sheen: 0.0,
            specularIntensity: 0.0,
            envMapIntensity: 0.0});

        this._mesh = new Mesh(this._geometry, this._material);
    }

    public get mesh(){
        return this._mesh;
    }

    public get material(){
        return this._material;
    }
}