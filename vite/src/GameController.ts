import {ClickableScene} from "./SceneManagment/Scenes/ClickableScene.ts";
import {PointLight} from "three";


export class GameController {

    private _fixedTimeStep = 1 / 60;
    private _clickableScene: ClickableScene;

    constructor() {
        this._clickableScene = new ClickableScene();
    }

    public init(){
        this._clickableScene.init();
    }

    public fixedUpdate() {
        this._clickableScene.update();
        requestAnimationFrame(this.fixedUpdate.bind(this));
    }
}