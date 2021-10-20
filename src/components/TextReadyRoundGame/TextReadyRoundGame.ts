import { IComponent } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Ready, READY_VALUE, Round } from '~/components/TextReadyRoundGame/styles';
import { TimerReadyText } from '~/components/TextReadyRoundGame/TimerReadyText';
import { TimerRoundText } from '~/components/TextReadyRoundGame/TimerRoundText';

export class TextReadyRoundGame implements IComponent {
  private _round: number;
  constructor(round: number) {
    this._round = round;
  }

  // handle UI
  drawReadyText(): void {
    const timer = TimerReadyText.getInstance();
    const now = new Date().getTime();
    const delta = now - timer.now();
    if (delta > 2000 && delta < 2800 && TimerRoundText.getInstance().getIsShow()) {
      timer.setIsShow(true);
    } else if (delta > 3000) {
      timer.setTime(now);
      timer.setIsShow(false);
    }
    if (CanvasSingleton.context && timer.getIsShow()) {
      const { x, y, fontFamily, fontSize, textAlign, color } = Ready;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(READY_VALUE.toUpperCase(), x, y);
    }
  }

  drawRoundText(): void {
    const timer = TimerRoundText.getInstance();
    const now = new Date().getTime();
    const delta = now - timer.now();
    if (delta > 3000) {
      timer.setTime(now);
      timer.setIsShow(false);
    }
    if (CanvasSingleton.context && timer.getIsShow()) {
      const { x, y, fontFamily, fontSize, textAlign, color } = Round;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(`round ${this._round}`.toUpperCase(), x, y);
    }
  }
  draw(): void {
    this.drawReadyText();
    this.drawRoundText();
  }
}
