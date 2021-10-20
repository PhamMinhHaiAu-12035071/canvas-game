import { RouteSingleton } from '~/RouteSingleton';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Utils } from '~/utils';
import { IScreen } from '~/types';
import { MenuGame } from '~/screens/MenuGame/MenuGame';
import { TimerSpaceText } from './screens/MenuGame/TimerSpaceText';
import { TimerEnterText } from '~/screens/MenuGame/TimerEnterText';
// loaded image
import LOGO from '~/assets/images/arkanoid.png';
import EDGE_LEFT from '~/assets/images/edge_left.png';
import EDGE_RIGHT from '~/assets/images/edge_right.png';
import EDGE_TOP from '~/assets/images/edge_top.png';
import CUBE_BLUE_IMAGE from '~/assets/images/cube_blue.png';
import CUBE_GREEN_IMAGE from '~/assets/images/cube_green.png';
import CUBE_RED_IMAGE from '~/assets/images/cube_red.png';
import CUBE_YELLOW_IMAGE from '~/assets/images/cube_yellow.png';
import BALL from '~/assets/images/ball.png';
import PADDLE from '~/assets/images/paddle.png';
import { RoundOne } from '~/screens/RoundOne/RoundOne';
import { TimerReadyText } from '~/components/TextReadyRoundGame/TimerReadyText';
import { TimerRoundText } from '~/components/TextReadyRoundGame/TimerRoundText';
import { TimerGameWin } from '~/screens/RoundOne/TimerGameWin';

const gameLoop = (): void => {
  CanvasSingleton.clear();
  const route: RouteSingleton = RouteSingleton.getInstance();
  const currentScreen: IScreen | undefined = route.getCurrentScreen();
  if (currentScreen) {
    currentScreen.drawScreen();
    if (currentScreen instanceof MenuGame) {
      // handle specific with MenuGame Screen
      currentScreen.drawSpaceText();
      currentScreen.drawEnterText();
    }
    if (currentScreen instanceof RoundOne) {
      currentScreen.checkGameWin();
      currentScreen.paddle.movePaddle();
      currentScreen.ball.move(currentScreen.paddle);
      currentScreen.collisionBall();
    }
  }

  requestAnimationFrame(() => gameLoop());
};

export class Application {
  private constructor() {}

  public static main(): void {
    Utils.loadImages(
      [
        LOGO,
        EDGE_LEFT,
        EDGE_RIGHT,
        EDGE_TOP,
        CUBE_BLUE_IMAGE,
        CUBE_GREEN_IMAGE,
        CUBE_RED_IMAGE,
        CUBE_YELLOW_IMAGE,
        BALL,
        PADDLE,
      ],
      () => {
        const timerSpaceText: TimerSpaceText = TimerSpaceText.getInstance();
        const timerEnterText: TimerEnterText = TimerEnterText.getInstance();
        const timerReadyText: TimerReadyText = TimerReadyText.getInstance();
        const timerRoundText: TimerRoundText = TimerRoundText.getInstance();
        const timerGameWin: TimerGameWin = TimerGameWin.getInstance();
        gameLoop();
      }
    );
  }
}
