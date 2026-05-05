import {BoxGeometry, Mesh, MeshNormalMaterial, MeshPhysicalMaterial, type Scene} from "three";
import {Easing, Tween} from "@tweenjs/tween.js";

export class Enemy{
    private _geometry: BoxGeometry;
    private _material: MeshNormalMaterial;

    private _mesh: Mesh;
    private _tweenScale: Tween;
    private _tweenRotation: Tween;

    private _tweenStarted: boolean;

    constructor() {
        this._geometry = new BoxGeometry(1,1,1);
        this._material = new MeshNormalMaterial({
            wireframeLinewidth: 1,
            wireframe: true
        });

        this._mesh = new Mesh(this._geometry, this._material);
    }


    public init(scene:Scene){
        this.mesh.position.set(0,0,0);
        scene.add(this.mesh);
    }

    public tweenScale(scale:number){
        this._tweenScale = new Tween(this._mesh.scale)
            .to({x: scale, y: scale, z: scale}, 800)
            .yoyo(true)
            .delay(25)
            .repeat(Infinity);
    }

    public tweenRotation(_x:number, _y:number, _z:number){
        this._tweenRotation = new Tween(this._mesh.rotation)
            .to({x: _x*Math.PI, y: _y*Math.PI, z: _z*Math.PI}, 800)
            .delay(25)
            .repeat(Infinity);
    }

    public update(deltaTime: number) {
        this._tweenScale.update(performance.now(), true);
        this._tweenRotation.update(performance.now(), true);
    }

    public get mesh(){
        return this._mesh;
    }

    public get material(){
        return this._material;
    }
}