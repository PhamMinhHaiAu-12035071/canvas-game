import BALL from '~/assets/images/ball.png';
import { IComponent, Vector } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Container, HEIGHT, WIDTH } from '~/components/Ball/styles';
import { RouteSingleton } from '~/RouteSingleton';
import { RoundOne } from '~/screens/RoundOne/RoundOne';
import { Paddle } from '~/components/Paddle/Paddle';

export class Ball implements IComponent {
  private readonly _image: HTMLImageElement = new Image();
  private _speed: Vector;
  private _position: Vector;
  private _isRunning: boolean;
  private _countSpaceOrEnter: number;
  private readonly _speedOriginal: Vector;
  constructor(speed: number) {
    this._image.src = BALL;
    this._speed = {
      x: speed,
      y: -speed,
    };
    this._speedOriginal = {
      x: speed,
      y: -speed,
    };
    this._isRunning = false;
    const { x, y } = Container;
    this._position = { x, y };
    this._countSpaceOrEnter = 0;
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  // handle UI
  draw(): void {
    if (CanvasSingleton.context) {
      const { width, height } = Container;
      CanvasSingleton.context.drawImage(this._image, this._position.x, this._position.y, width, height);
    }
  }

  // handle logic
  move(paddle: Paddle): void {
    if (this._isRunning) {
      this._position.x += this._speed.x;
      this._position.y += this._speed.y;
    } else {
      this._position = {
        x: paddle.position.x + paddle.width / 2 - WIDTH / 2,
        y: paddle.position.y - HEIGHT,
      };
    }
  }
  changeDirectionHorizontal(): void {
    if (this._isRunning) {
      this._speed.x = -this._speed.x;
    }
  }

  changeDirectionVertical(): void {
    if (this._isRunning) {
      this._speed.y = -this._speed.y;
    }
  }

  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Space' || event.key === ' ' || event.code === 'Enter' || event.key === 'Enter') {
      if (RouteSingleton.getInstance().getCurrentScreen() instanceof RoundOne) {
        this._countSpaceOrEnter += 1;
      }
      if (this._countSpaceOrEnter > 1) {
        this._isRunning = true;
        this._speed = { ...this._speedOriginal };
      }
    }
  };
  // Getters
  get position(): Vector {
    return this._position;
  }

  // Setters
  set isRunning(isRunning: boolean) {
    this._isRunning = isRunning;
  }
}
