import { IScreen } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { RouteSingleton } from '~/RouteSingleton';
import {
  Container,
  ENTER_TEXT,
  EnterText,
  LICENSE_TEXT,
  LicenseText,
  SPACE_TEXT,
  SpaceText,
  SpaceTextShadow,
} from '~/screens/MenuGame/styles';
import { Logo } from '~/components/Logo/Logo';
import { Score } from '~/components/Score/Score';
import { HighScore } from '~/components/HighScore/HighScore';
import { TimerSpaceText } from '~/screens/MenuGame/TimerSpaceText';
import { TimerEnterText } from '~/screens/MenuGame/TimerEnterText';

export class MenuGame implements IScreen {
  private readonly _logo: Logo;
  private readonly _score: Score;
  private readonly _highScore: HighScore;

  constructor() {
    document.addEventListener('keydown', this.handleKeyDown, false);
    this._logo = new Logo();
    this._score = new Score('1up', 0);
    this._highScore = new HighScore('high score', 41560);
  }

  // handle logic
  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Space' || event.key === ' ' || event.code === 'Enter' || event.key === 'Enter') {
      const route: RouteSingleton = RouteSingleton.getInstance();
      route.navigate('RoundOne');
    }
  };

  // handle UI
  drawBackground(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height, backgroundColor } = Container;
      CanvasSingleton.context.fillStyle = backgroundColor;
      CanvasSingleton.context.fillRect(x, y, width, height);
    }
  }

  drawSpaceText(): void {
    if (CanvasSingleton.context) {
      const timer = TimerSpaceText.getInstance();
      const now = new Date().getTime();
      const delta = now - timer.now();
      if (delta > 1000 / 5) {
        timer.setTime(now);
        timer.changeColor();
      }
      const { x, y, fontFamily, fontSize, textAlign } = SpaceText;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = timer.getColor();
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(SPACE_TEXT.toUpperCase(), x, y);
    }
  }

  drawSpaceTextShadow(): void {
    if (CanvasSingleton.context) {
      const { x, y, fontFamily, fontSize, textAlign, color } = SpaceTextShadow;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = color;
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(SPACE_TEXT.toUpperCase(), x, y);
    }
  }

  drawEnterText(): void {
    if (CanvasSingleton.context) {
      const timer = TimerEnterText.getInstance();
      const now = new Date().getTime();
      const delta = now - timer.now();
      if (delta > 1000 / 5) {
        timer.setTime(now);
        timer.changeColor();
      }
      const { x, y, fontFamily, fontSize, textAlign } = EnterText;
      CanvasSingleton.context.font = `${fontSize}px ${fontFamily}`;
      CanvasSingleton.context.fillStyle = timer.getColor();
      CanvasSingleton.context.textAlign = textAlign;
      CanvasSingleton.context.fillText(ENTER_TEXT.toUpperCase(), x, y);
    }
  }

  drawLicenseText(): void {
    LICENSE_TEXT.split('\n').map((value, index) => {
      if (CanvasSingleton.context) {
        const { x, y, fontSize, fontFamily, color, textAlign } = LicenseText(index);
        CanvasSingleton.context.font = `bolder ${fontSize}px ${fontFamily}`;
        CanvasSingleton.context.fillStyle = color;
        CanvasSingleton.context.textAlign = textAlign;
        CanvasSingleton.context.fillText(value, x, y);
      }
    });
  }

  drawScreen(): void {
    this.drawBackground();
    this._logo.draw();
    this._score.draw();
    this._highScore.draw();
    this.drawSpaceTextShadow();
    this.drawLicenseText();
  }
}
