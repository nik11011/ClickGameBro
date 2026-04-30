import {BoxGeometry, Mesh, MeshNormalMaterial, MeshPhysicalMaterial} from "three";
import {Tween} from "@tweenjs/tween.js";

export class Enemy{
    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _mesh: Mesh;
    private _tween: Tween;

    private _tweenStarted: boolean;

    constructor() {
        this._geometry = new BoxGeometry(1,1,1);
        this._material = new MeshNormalMaterial({wireframe: true});

        this._mesh = new Mesh(this._geometry, this._material);

        this._tween = new Tween(this._mesh.scale)
            .to({x: 0.5, y: 0.5, z:0.5}, 800)
            .yoyo(true)
            .repeat(Infinity)
            .start()
    }

    public update(deltaTime: number) {
        this._tween.update(performance.now());
    }

    public get mesh(){
        return this._mesh;
    }

    public get material(){
        return this._material;
    }
}