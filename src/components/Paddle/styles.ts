import { CanvasSingleton } from '~/CanvasSingleton';
import { Background } from '~/components/SceneGame/styles';

export const WIDTH = 79;
export const HEIGHT = 20;
const GAP = 20;
export const MIN = Background.x + 5;
export const MAX = Background.width - WIDTH + 10;

export const Container = {
  x: CanvasSingleton.canvas.width / 2 - WIDTH / 2,
  y: CanvasSingleton.canvas.height - HEIGHT - GAP,
  width: WIDTH,
  height: HEIGHT,
};
