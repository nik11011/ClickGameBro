import EventEmitter from "eventemitter3";
import {Scene, PerspectiveCamera, WebGLRenderer,  PointLight} from "three";

export class Level{
    public event: EventEmitter;

    protected _scene: Scene;
    protected renderer: WebGLRenderer;

    private _camera: PerspectiveCamera;
    private _light: PointLight;
    private _canvas: HTMLCanvasElement;


    constructor(){

        this._scene = new Scene();

        this._canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

        this.renderer = new WebGLRenderer({canvas: this._canvas});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor('#7a0000', 1);

        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        this._scene.add(this._camera);


        this._light = new PointLight('#ffffff', 200000);
        this._light.position.set(0, 50, 0);
        this._scene.add(this._light);

        this.event = new EventEmitter();
        this.event.emit('resize');

        window.addEventListener('resize', ()=>{
            this._resize();
            this.event.emit('resize', {width: window.innerWidth, height: window.innerHeight});
        });
    }

    public get camera(){
        return this._camera;
    }

    public get canvas(){
        return this._canvas;
    }

    public get scene(){
        return this._scene;
    }

    protected _resize(){
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    protected _render(){
        this.renderer.render(this._scene,this._camera);
    }
}

