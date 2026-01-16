import {Level} from "../Level.ts";
import {Cube} from "../../Objects/Cube.ts";
import {TextMesh} from "../../UI/Font3DComponent.ts";


export class ClickableScene extends Level{
    private _backGroundPlatform: Cube | undefined;
    private _FONT_Platform : TextMesh;

    constructor() {
        super();
    }

    public init() {
        this.renderer.setClearColor('#000000')
        this.initObjects();
    }

    public initObjects(){
        this.camera.position.set(-15, 0, -15);
        this.camera.lookAt(0, 0, 0);

        this._backGroundPlatform = new Cube("#434343");
        this._backGroundPlatform.mesh.position.set(15, 0, 15);
        this._backGroundPlatform.mesh.lookAt(this.camera.position);
        this._backGroundPlatform.mesh.scale.set(200,200,1);
        this._scene.add(this._backGroundPlatform.mesh);
    }

    public update(){
        this._render();
    }
}