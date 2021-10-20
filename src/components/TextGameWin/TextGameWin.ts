import { IComponent } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { GameWin } from '~/components/TextGameWin/styles';

export class TextGameWin implements IComponent {
  constructor() {}

  draw(): void {
    if (CanvasSingleton.context) {
      const { x, y, fontFamily, fontSize, textAlign, color } = GameWin;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText('Game Win !'.toUpperCase(), x, y);
    }
  }
}
