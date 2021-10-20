import { IComponent, Vector } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';

export class Brick implements IComponent {
  private readonly _image: HTMLImageElement = new Image();
  private readonly _position: Vector;
  private readonly _width: number;
  private readonly _height: number;
  private readonly _row: number;
  private readonly _column: number;
  constructor(width: number, height: number, position: Vector, image: string, rowIndex: number, columnIndex: number) {
    this._image.src = image;
    this._position = position;
    this._width = width;
    this._height = height;
    this._row = rowIndex;
    this._column = columnIndex;
  }

  // handle UI
  draw(): void {
    if (CanvasSingleton.context) {
      CanvasSingleton.context.drawImage(this._image, this._position.x, this._position.y, this._width, this._height);
    }
  }

  // Getters
  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }
  get position(): Vector {
    return this._position;
  }
  get row(): number {
    return this._row;
  }
  get column(): number {
    return this._column;
  }
}
