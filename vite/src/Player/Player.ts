import { BoxGeometry, Mesh, MeshPhysicalMaterial, Vector3 } from "three";

export class Player {
    private _geometry: BoxGeometry;
    private _material: MeshPhysicalMaterial;

    private _mesh: Mesh;

    private _center: Vector3;
    private _radius: number;
    private _angle: number;
    private _angularSpeed: number;
    private _diameterSpeed: number;   // скорость движения по диаметру
    private _moveDirection: number;   // -1 влево, 1 вправо, 0 стоп
    private _moveDirectionOnDiameter: number; // -1 к центру, 1 от центра, 0 стоп

    constructor(color: any) {
        this._geometry = new BoxGeometry(1, 1, 1);
        this._material = new MeshPhysicalMaterial({ wireframe: true });
        this._mesh = new Mesh(this._geometry, this._material);

        this._center = new Vector3(0, 0, 0);
        this._radius = 3;
        this._angle = 0;
        this._angularSpeed = 2.0;
        this._diameterSpeed = 2.0;     // можно настроить
        this._moveDirection = 0;
        this._moveDirectionOnDiameter = 0;   // ← инициализация!

        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);
    }

    private _updatePositionFromAngle(): void {
        this._mesh.position.x = this._center.x + this._radius * Math.cos(this._angle);
        this._mesh.position.y = this._center.y + this._radius * Math.sin(this._angle);
        this._mesh.position.z = this._center.z;
    }

    public update(deltaTime: number): void {
        // Движение по окружности (стрелки влево-вправо)
        if (this._moveDirection !== 0) {
            this._angle += this._angularSpeed * this._moveDirection * deltaTime;
            // Нормализация угла
            if (this._angle > Math.PI * 2) this._angle -= Math.PI * 2;
            if (this._angle < 0) this._angle += Math.PI * 2;
        }

        // Движение по диаметру (стрелки вверх-вниз)
        if (this._moveDirectionOnDiameter !== 0) {
            // Меняем радиус
            this._radius += this._diameterSpeed * this._moveDirectionOnDiameter * deltaTime;
            // Ограничиваем радиус (например, от 1 до 10)
            this._radius = Math.max(1, Math.min(10, this._radius));
        }

        // Всегда пересчитываем позицию после изменений угла или радиуса
        this._updatePositionFromAngle();
        // Поворачиваем меш лицом к центру
        this._mesh.lookAt(this._center);
    }

    public startOutCenter(): void {
        this._moveDirectionOnDiameter = 1;   // удаление от центра
    }
    public startToCenter(): void {
        this._moveDirectionOnDiameter = -1;  // приближение к центру
    }
    public startLeft(): void {
        this._moveDirection = -1;
    }
    public startRight(): void {
        this._moveDirection = 1;
    }
    public stop(): void {
        this._moveDirection = 0;
    }
    public stopOnDiameter(): void {
        this._moveDirectionOnDiameter = 0;
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

    private _onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            this.startLeft();
        } else if (e.key === "ArrowRight") {
            this.startRight();
        } else if (e.key === "ArrowUp") {
            this.startToCenter();      // приближаемся к центру
        } else if (e.key === "ArrowDown") {
            this.startOutCenter();     // удаляемся от центра (исправлено!)
        }
    };

    private _onKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            this.stop();
        }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            this.stopOnDiameter();
        }
    };
}