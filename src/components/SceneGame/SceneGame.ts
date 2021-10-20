import { IComponent } from '~/types';
import EDGE_LEFT from '~/assets/images/edge_left.png';
import EDGE_RIGHT from '~/assets/images/edge_right.png';
import EDGE_TOP from '~/assets/images/edge_top.png';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Background, EdgeLeft, EdgeRight, EdgeTop } from '~/components/SceneGame/styles';

export class SceneGame implements IComponent {
  private readonly _imageEdgeLeft: HTMLImageElement = new Image();
  private readonly _imageEdgeRight: HTMLImageElement = new Image();
  private readonly _imageEdgeTop: HTMLImageElement = new Image();
  private readonly _background: string;
  constructor(background: string) {
    this._imageEdgeLeft.src = EDGE_LEFT;
    this._imageEdgeRight.src = EDGE_RIGHT;
    this._imageEdgeTop.src = EDGE_TOP;
    this._background = background;
  }

  // handle UI
  drawEdgeLeft(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height } = EdgeLeft;
      CanvasSingleton.context.drawImage(this._imageEdgeLeft, x, y, width, height);
    }
  }
  drawEdgeRight(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height } = EdgeRight;
      CanvasSingleton.context.drawImage(this._imageEdgeRight, x, y, width, height);
    }
  }
  drawEdgeTop(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height } = EdgeTop;
      CanvasSingleton.context.drawImage(this._imageEdgeTop, x, y, width, height);
    }
  }
  drawBackground(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height } = Background;
      CanvasSingleton.context.fillStyle = this._background;
      CanvasSingleton.context.fillRect(x, y, width, height);
    }
  }
  draw(): void {
    this.drawEdgeLeft();
    this.drawEdgeRight();
    this.drawEdgeTop();
    this.drawBackground();
  }
}
