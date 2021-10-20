import { Container } from '~/components/Logo/styles';
import { CanvasSingleton } from '~/CanvasSingleton';

const WIDTH_ORIGINAL_SIDE = 22;
const HEIGHT_ORIGINAL_SIDE = 650;
const WIDTH_ORIGINAL_EDGE_TOP = 556;
const HEIGHT_ORIGINAL_EDGE_TOP = 22;
const y = Container.y + Container.height;
const heightSide = CanvasSingleton.canvas.height - y;
const widthSide = (WIDTH_ORIGINAL_SIDE * heightSide) / HEIGHT_ORIGINAL_SIDE;
const widthEdgeTop = CanvasSingleton.canvas.width - widthSide * 2;

export const EdgeLeft = {
  x: 0,
  y,
  width: widthSide,
  height: heightSide,
};

export const EdgeRight = {
  x: CanvasSingleton.canvas.width - widthSide,
  y,
  width: widthSide,
  height: heightSide,
};

export const EdgeTop = {
  x: widthSide,
  y,
  width: widthEdgeTop,
  height: HEIGHT_ORIGINAL_EDGE_TOP,
};

export const Background = {
  x: widthSide,
  y: y + HEIGHT_ORIGINAL_EDGE_TOP,
  width: widthEdgeTop,
  height: heightSide - HEIGHT_ORIGINAL_EDGE_TOP,
};
