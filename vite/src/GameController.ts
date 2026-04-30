import {GameLevel} from "./SceneManagment/Scenes/GameLevel.ts";
import {PointLight} from "three";


export class GameController {
    private _fixedTimeStep = 1 / 60;
    private _gameLevel: GameLevel;

    constructor() {
        this._gameLevel = new GameLevel();
    }

    public async init(){
        this._gameLevel.init();
    }

    public fixedUpdate() {
        this._gameLevel.update();
        requestAnimationFrame(this.fixedUpdate.bind(this));
    }
}