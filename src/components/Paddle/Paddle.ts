import { IComponent, Vector } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Container, MAX, MIN } from '~/components/Paddle/styles';
import PADDLE from '~/assets/images/paddle.png';

export class Paddle implements IComponent {
  private readonly _image: HTMLImageElement = new Image();
  private _moveLeft: boolean;
  private _moveRight: boolean;
  private readonly _speed: number;
  private readonly _position: Vector;

  constructor(speed: number) {
    this._moveLeft = false;
    this._moveRight = false;
    this._speed = speed;
    const { x, y } = Container;
    this._position = {
      x,
      y,
    };
    this._image.src = PADDLE;
    document.addEventListener('keydown', this.handleKeyDown, false);
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  // handle UI
  draw(): void {
    if (CanvasSingleton.context) {
      const { width, height } = Container;
      CanvasSingleton.context.drawImage(this._image, this._position.x, this._position.y, width, height);
    }
  }

  // handle Logic
  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowLeft' || event.code === 'ArrowLeft') {
      this._moveLeft = true;
    }
    if (event.key === 'ArrowRight' || event.code === 'ArrowRight') {
      this._moveRight = true;
    }
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowLeft' || event.code === 'ArrowLeft') {
      this._moveLeft = false;
    }
    if (event.key === 'ArrowRight' || event.code === 'ArrowRight') {
      this._moveRight = false;
    }
  };

  movePaddle(): void {
    if (this._moveLeft && this._position.x >= MIN) {
      this._position.x -= this._speed;
    }
    if (this._moveRight && this._position.x <= MAX) {
      this._position.x += this._speed;
    }
  }

  // Getters
  get position(): Vector {
    return this._position;
  }

  get width(): number {
    return Container.width;
  }
}
