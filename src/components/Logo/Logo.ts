import { IComponent } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Container, IMAGE_LOGO } from './styles';

export class Logo implements IComponent {
  private readonly _image: HTMLImageElement = new Image();
  constructor() {
    this._image.src = IMAGE_LOGO;
  }

  draw(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height } = Container;
      CanvasSingleton.context.drawImage(this._image, x, y, width, height);
    }
  }
}
