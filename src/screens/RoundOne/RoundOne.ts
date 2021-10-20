import { IScreen } from '~/types';
import { CanvasSingleton } from '~/CanvasSingleton';
import { Container } from '~/screens/RoundOne/styles';
import { Logo } from '~/components/Logo/Logo';
import { Score } from '~/components/Score/Score';
import { HighScore } from '~/components/HighScore/HighScore';
import { SceneGame } from '~/components/SceneGame/SceneGame';
import { ListBrick } from '~/components/ListBrick/ListBrick';
import { Paddle } from '~/components/Paddle/Paddle';
import { Ball } from '~/components/Ball/Ball';
import { HEIGHT, MAX_WIDTH, MIN_HEIGHT, MIN_WIDTH, WIDTH } from '~/components/Ball/styles';
import { WIDTH as WIDTH_PADDLE } from '~/components/Paddle/styles';
import { TextReadyRoundGame } from '~/components/TextReadyRoundGame/TextReadyRoundGame';
import { TimerGameWin } from '~/screens/RoundOne/TimerGameWin';
import { TextGameWin } from '~/components/TextGameWin/TextGameWin';

export class RoundOne implements IScreen {
  private readonly _logo: Logo;
  private readonly _score: Score;
  private readonly _highScore: HighScore;
  private readonly _sceneGame: SceneGame;
  private readonly _listBrick: ListBrick;
  private readonly _paddle: Paddle;
  private readonly _speedPaddle: number = 10;
  private readonly _ball: Ball;
  private readonly _speedBall: number = 10;
  private readonly _textReadyRoundGame: TextReadyRoundGame;
  private readonly _textGameWin: TextGameWin;
  private _LEVEL: Array<Array<number>> = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 0],
    [0, 0, 4, 4, 4, 4, 4, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  constructor() {
    this._logo = new Logo();
    this._score = new Score('1up', 0);
    this._highScore = new HighScore('high score', 41560);
    this._sceneGame = new SceneGame('green');
    this._listBrick = new ListBrick();
    this._paddle = new Paddle(this._speedPaddle);
    this._ball = new Ball(this._speedBall);
    this._textReadyRoundGame = new TextReadyRoundGame(1);
    this._textGameWin = new TextGameWin();
  }

  // handle UI
  drawBackground(): void {
    if (CanvasSingleton.context) {
      const { x, y, width, height, backgroundColor } = Container;
      CanvasSingleton.context.fillStyle = backgroundColor;
      CanvasSingleton.context.fillRect(x, y, width, height);
    }
  }

  drawScreen(): void {
    this.drawBackground();
    this._logo.draw();
    this._score.draw();
    this._highScore.draw();
    this._sceneGame.draw();
    this._listBrick.draw(this._LEVEL);
    this._paddle.draw();
    this._ball.draw();
    this._textReadyRoundGame.draw();
  }
  checkGameWin(): void {
    const timer: TimerGameWin = TimerGameWin.getInstance();
    const now = new Date().getTime();
    const delta = now - timer.now();
    if (timer.getIsShow()) {
      this._textGameWin.draw();
    } else {
      if (delta > 1000) {
        timer.setTime(now);
        if (this._LEVEL.every((row) => row.every((item) => item === 0))) {
          this._textGameWin.draw();
          timer.setIsShow(true);
          this._ball.isRunning = false;
        }
      }
    }
  }
  collisionBall(): void {
    // check ball collision wall
    if (this._ball.position.x < MIN_WIDTH || this._ball.position.x > MAX_WIDTH - WIDTH / 2) {
      this._ball.changeDirectionHorizontal();
    }
    if (this._ball.position.y < MIN_HEIGHT) {
      this._ball.changeDirectionVertical();
    }
    // check ball collision paddle
    if (
      this._ball.position.x + WIDTH > this._paddle.position.x &&
      this._ball.position.x < this._paddle.position.x + WIDTH_PADDLE &&
      this._ball.position.y + HEIGHT === this._paddle.position.y
    ) {
      this._ball.changeDirectionVertical();
    }
    if (this._ball.position.y > CanvasSingleton.canvas.height) {
      this._ball.isRunning = false;
    }
    // check ball collision bricks
    this._listBrick.arr.map((item, index) => {
      if (
        this._ball.position.x < item.position.x + item.width &&
        this._ball.position.x + WIDTH > item.position.x &&
        this._ball.position.y < item.position.y + item.height &&
        this._ball.position.y + HEIGHT > item.position.y
      ) {
        this._LEVEL[item.row][item.column] = 0;
        this._score.score = this._score.score + 1;
        this._ball.changeDirectionVertical();
      }
    });
  }
  // Getters
  get paddle(): Paddle {
    return this._paddle;
  }
  get ball(): Ball {
    return this._ball;
  }
}
