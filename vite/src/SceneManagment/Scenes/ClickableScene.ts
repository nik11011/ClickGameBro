import {Level} from "../Level.ts";


export class ClickableScene extends Level{

    constructor() {
        super();
    }

    private _init() {

    }

    public update(){
        this._render();
    }
}