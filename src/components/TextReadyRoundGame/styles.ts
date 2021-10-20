import { CanvasSingleton } from '~/CanvasSingleton';
import { Background } from '~/components/SceneGame/styles';

export const READY_VALUE = 'ready';

const y = Background.y + (Background.height * 3) / 4;
const fontSize = CanvasSingleton.canvas.width * 0.03;
const TextCommon = {
  fontFamily: 'generation',
  fontSize,
  textAlign: 'center' as CanvasTextAlign,
  color: 'white',
};
export const Round = {
  x: CanvasSingleton.canvas.width / 2,
  y: y - fontSize * 2,
  ...TextCommon,
};
export const Ready = {
  x: CanvasSingleton.canvas.width / 2,
  y,
  ...TextCommon,
};
