import { CanvasSingleton } from '~/CanvasSingleton';

export const SPACE_TEXT = 'spacebar to start';
export const ENTER_TEXT = 'or enter level';
export const LICENSE_TEXT = 'Based on original Arkanoid game \n by Talto Corporation 1986';
const shadowOffsetSpaceText = 4;
const ySpaceText = CanvasSingleton.canvas.height / 2;

const TextCommon = {
  fontFamily: 'optimus',
  textAlign: 'center' as CanvasTextAlign,
};
export const Container = {
  x: 0,
  y: 0,
  width: CanvasSingleton.canvas.width,
  height: CanvasSingleton.canvas.height,
  backgroundColor: 'black',
};

export const SpaceText = {
  x: CanvasSingleton.canvas.width / 2,
  y: ySpaceText,
  color: 'yellow',
  fontSize: CanvasSingleton.canvas.width * 0.06,
  ...TextCommon,
};

export const SpaceTextShadow = {
  x: CanvasSingleton.canvas.width / 2 + shadowOffsetSpaceText,
  y: ySpaceText + shadowOffsetSpaceText,
  color: 'lightgray',
  fontSize: CanvasSingleton.canvas.width * 0.06,
  ...TextCommon,
};

export const EnterText = {
  x: CanvasSingleton.canvas.width / 2,
  y: ySpaceText + 70,
  color: 'red',
  fontSize: CanvasSingleton.canvas.width * 0.045,
  ...TextCommon,
};

export const LicenseText = (index: number) => ({
  x: CanvasSingleton.canvas.width / 2,
  y: CanvasSingleton.canvas.height - 100 + index * 40,
  color: 'gray',
  fontSize: CanvasSingleton.canvas.width * 0.03,
  ...TextCommon,
});
