import {Level} from "../Level.ts";
import {Cube} from "../../Objects/Cube.ts";
import type {TextMesh} from "../../UI/Font3DComponent.ts";
import {Tween} from "@tweenjs/tween.js";
import {PointLight} from "three";
import {Player} from "../../Player/Player.ts";
import {Enemy} from "../../Enemy/Enemy.ts";


export class GameLevel extends Level{
    private _backGroundPlatform: Cube | undefined;
    private _FONT_Platform : TextMesh;
    private _player: Player;
    private _enemys: Array<Enemy>;


    constructor() {
        super();
        this.camera.position.z = 5;
    }

    public init() {
        this._light = new PointLight('#ff0000', 1);
        this.renderer.setClearColor('#000000')
        this.initObjects();


    }

    public initObjects(){
        this._player = new Player("#ff0000");
        this._player.mesh.position.set(0,0,0);
        this._scene.add(this._player.mesh);
        this._player.mesh.lookAt(this._camera.position);
        this._player.mesh.scale.set(0.25,0.25,0.25);


        this._enemys = Array.from({length: 4}, () => new Enemy());

        this._enemys[0].tweenScale(0.5)
        this._enemys[1].tweenScale(0.5)
        this._enemys[2].tweenScale(0.5)
        this._enemys[3].tweenScale(0.5)
        this._enemys[0].tweenRotation(1,0,0)
        this._enemys[1].tweenRotation(0,1,0)
        this._enemys[2].tweenRotation(0,-1,0)
        this._enemys[3].tweenRotation(-1,0,0)
        this._enemys.map(enemy=>enemy.init(this._scene))
    }

    public update(){
        this._player.update(this._clock.getDelta());
        this._enemys.map(enemy=>enemy.update(this._clock.getDelta()));

        this._render();
    }
}