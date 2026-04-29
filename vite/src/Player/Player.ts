import {BoxGeometry, Mesh, MeshPhysicalMaterial, Vector3} from "three";

export class Player {
    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _mesh: Mesh;

    private _center: Vector3;
    private _radius: number;
    private _angle: number;
    private _angularSpeed: number;
    private _moveDirection: number;

    constructor(color) {
        this._geometry = new BoxGeometry(1,1,1);
        this._material = new MeshPhysicalMaterial({
            color: color,
            roughness: 1.0,
            metalness: 0.0,
            clearcoat: 0.0,
            sheen: 0.0,
            specularIntensity: 0.0,
            envMapIntensity: 0.0});

        this._mesh = new Mesh(this._geometry, this._material);

        this._center = new Vector3(0,0,-5);
        this._radius = 3;
        this._angle = 0;
        this._angularSpeed = 2.0;
        this._moveDirection = 0;
    }

    private _updatePositionFromAngle(){
        this._mesh.position.x = this._center.x + this._radius * Math.cos(this._angle);
        this._mesh.position.y = this._center.y + this._radius * Math.sin(this._angle);

        this._mesh.position.z = this._center.z;
    }

    public update(deltaTime: number){
        if(this._moveDirection !== 0){
            this._angle += this._angularSpeed * this._moveDirection * deltaTime;
            if(this._angle>Math.PI*2)this._angle -= Math.PI * 2;
            if(this._angle<0)this._angle+=Math.PI*2;
            this._updatePositionFromAngle();
        }

        this.mesh.lookAt(this._center);
    }

    public startLeft(){
        this._moveDirection = -1;
    }
    public startRight(){
        this._moveDirection = 1;
    }
    public stop(){
        this._moveDirection = 0;
    }
    public get mesh(): Mesh {
        return this._mesh;
    }

    public get material(): MeshPhysicalMaterial {
        return this._material;
    }

    public get angle(): number {
        return this._angle;
    }
}