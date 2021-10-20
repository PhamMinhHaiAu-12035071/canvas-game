import { CanvasSingleton } from '~/CanvasSingleton';
import { Background } from '~/components/SceneGame/styles';

const y = Background.y + Background.height / 2;
const fontSize = CanvasSingleton.canvas.width * 0.03;
const TextCommon = {
  fontFamily: 'generation',
  fontSize,
  textAlign: 'center' as CanvasTextAlign,
  color: 'white',
};
export const GameWin = {
  x: CanvasSingleton.canvas.width / 2,
  y,
  ...TextCommon,
};
