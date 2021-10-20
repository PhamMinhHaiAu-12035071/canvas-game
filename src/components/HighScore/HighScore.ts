import { IComponent } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Title, Score } from '~/components/HighScore/styles';

export class HighScore implements IComponent {
  private readonly _title: string;
  private readonly _score: number;
  constructor(title: string, score: number) {
    this._title = title;
    this._score = score;
  }

  // handle UI
  drawTitle(): void {
    if (CanvasSingleton.context) {
      const { x, y, fontFamily, fontSize, color, textAlign } = Title;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(this._title, x, y);
    }
  }
  drawScore(): void {
    if (CanvasSingleton.context) {
      const { x, y, fontFamily, fontSize, color, textAlign } = Score;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(this._score.toString(), x, y);
    }
  }
  draw(): void {
    this.drawTitle();
    this.drawScore();
  }
}
