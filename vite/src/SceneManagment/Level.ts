import {Scene, Camera, PerspectiveCamera, WebGLRenderer} from "three";

export class Level{
    private _scene: Scene;
    private _camera: PerspectiveCamera;
    private _renderer: WebGLRenderer;

    constructor(){
        this._scene = new Scene();
        const canvas = document.getElementById('gameCanvas')!;
        this._renderer = new WebGLRenderer({canvas});
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        this._renderer.setClearColor('#84faee', 1);
        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        this._scene.add(this._camera);
    }

    protected _render(){
        this._renderer.render(this._scene,this._camera);
    }
}