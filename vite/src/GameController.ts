import {GameLevel} from "./SceneManagment/Scenes/GameLevel.ts";
import {PointLight} from "three";


export class GameController {
    private _fixedTimeStep = 1 / 60;
    private _clickableScene: GameLevel;

    constructor() {
        this._clickableScene = new GameLevel();
    }

    public async init(){
        this._clickableScene.init();
    }

    public fixedUpdate() {
        this._clickableScene.update();
        requestAnimationFrame(this.fixedUpdate.bind(this));
    }
}