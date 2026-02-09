import {Level} from "../Level.ts";
import {Cube} from "../../Objects/Cube.ts";
import type {TextMesh} from "../../UI/Font3DComponent.ts";
import {Tween} from "@tweenjs/tween.js";
import {PointLight} from "three";


export class ClickableScene extends Level{
    private _backGroundPlatform: Cube | undefined;
    private _FONT_Platform : TextMesh;
    private _clickableCube: Cube;

    constructor() {
        super();
        this._clickableCube = new Cube("#ff0000");
        this._clickableCube.mesh.scale.set(1,1,1);
    }

    public init() {
        this._light = new PointLight('#ff0000', 1);
        this.renderer.setClearColor('#000000')
        this.initObjects();
    }
    public initObjects(){
        this._clickableCube.mesh.position.set(0, 0, -5);
        this._scene.add(this._clickableCube.mesh);
    }

    public update(){
        this._render();
    }
}