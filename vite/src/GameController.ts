import {Level} from "./SceneManagment/Level.ts"
import {ClickableScene} from "./SceneManagment/Scenes/ClickableScene.ts";


export class GameController {
    fixedTimeStep = 1 / 60;

    private clickableScene: ClickableScene;

    constructor() {
        this.clickableScene = new ClickableScene();
    }

    public fixedUpdate() {
        setTimeout(this.fixedUpdate, this.fixedTimeStep * 1000)
        this.clickableScene.update();
    }
}