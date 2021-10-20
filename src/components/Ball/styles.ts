import { Container as Paddle } from '~/components/Paddle/styles';
import { Background } from '~/components/SceneGame/styles';
export const WIDTH = 10;
export const HEIGHT = 10;

export const MIN_WIDTH = Background.x;
export const MAX_WIDTH = Background.width;
export const MIN_HEIGHT = Background.y;
export const MAX_HEIGHT = Background.height;

export const Container = {
  x: Paddle.x + Paddle.width / 2 - WIDTH / 2,
  y: Paddle.y - HEIGHT,
  width: WIDTH,
  height: HEIGHT,
};
