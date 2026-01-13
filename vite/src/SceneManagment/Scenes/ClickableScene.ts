import {Level} from "../Level.ts";
import {Cube} from "../../Objects/Cube.ts";


export class ClickableScene extends Level{

    private _box: Cube | undefined;

    constructor() {
        super();
    }

    public init() {
        this.renderer.setClearColor('#009dff')
        this.initObjects();
    }

    public initObjects(){
        this.camera.position.set(-10, 5, -10);
        this.camera.lookAt(3, 3, 3);

        this._box = new Cube("#ffffff");
        this._box.mesh.position.set(0, -2, -3);
        this._box.mesh.scale.set(10,1,10);
        this._scene.add(this._box.mesh);
    }

    public update(){
        this._render();
    }
}