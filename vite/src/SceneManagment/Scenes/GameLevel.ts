import {Level} from "../Level.ts";
import {Cube} from "../../Objects/Cube.ts";
import type {TextMesh} from "../../UI/Font3DComponent.ts";
import {Tween} from "@tweenjs/tween.js";
import {PointLight} from "three";
import {Player} from "../../Player/Player.ts";


export class GameLevel extends Level{
    private _backGroundPlatform: Cube | undefined;
    private _FONT_Platform : TextMesh;
    private _player: Player;

    constructor() {
        super();
        this.camera.position.z = 5;

        this._player = new Player("#ff0000");
        this._player.mesh.scale.set(0.25,0.25,0.25);
    }

    public init() {
        this._light = new PointLight('#ff0000', 1);
        this.renderer.setClearColor('#000000')
        this.initObjects();

        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp)
    }

    private _onKeyDown = (e: KeyboardEvent) => {
        if(e.key === "ArrowLeft") {
            this._player.startLeft();
        }
        if(e.key === "ArrowRight"){
            this._player.startRight();
        }
    }

    private _onKeyUp = (e: KeyboardEvent) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            this._player.stop();
        }
    }
    public initObjects(){
        this._player.mesh.position.set(0,-3,0)
        this._scene.add(this._player.mesh)
        this._player.mesh.lookAt(this._camera.position);
    }

    public update(){
        this._player.update(this._clock.getDelta());

        this._render();
    }
}