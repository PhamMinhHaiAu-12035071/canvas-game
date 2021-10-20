import { CanvasSingleton } from '~/CanvasSingleton';

const x = CanvasSingleton.canvas.width - 10;
const fontSize = CanvasSingleton.canvas.width * 0.03;
const yTitle = CanvasSingleton.canvas.width * 0.05 + fontSize * 2 + 15;

const TextCommon = {
  fontFamily: 'generation',
  textAlign: 'right' as CanvasTextAlign,
};
export const Title = {
  x,
  y: yTitle,
  fontSize,
  color: 'red',
  ...TextCommon,
};

export const Score = {
  x,
  y: yTitle + fontSize,
  fontSize,
  color: 'white',
  ...TextCommon,
};
