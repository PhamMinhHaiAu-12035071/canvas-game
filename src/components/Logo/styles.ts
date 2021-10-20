import { CanvasSingleton } from '~/CanvasSingleton';
import LOGO from '~/assets/images/arkanoid.png';

export const IMAGE_LOGO = LOGO;
export const WIDTH_ORIGINAL = 1733;
export const HEIGHT_ORIGINAL = 512;
export const PERCENTAGE = (0.5 * CanvasSingleton.canvas.width) / WIDTH_ORIGINAL;

export const Container = {
  x: 5,
  y: 20,
  width: WIDTH_ORIGINAL * PERCENTAGE,
  height: HEIGHT_ORIGINAL * PERCENTAGE,
};
