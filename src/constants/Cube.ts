import CUBE_BLUE_IMAGE from '~/assets/images/cube_blue.png';
import CUBE_GREEN_IMAGE from '~/assets/images/cube_green.png';
import CUBE_RED_IMAGE from '~/assets/images/cube_red.png';
import CUBE_YELLOW_IMAGE from '~/assets/images/cube_yellow.png';

export const CUBE_IMAGES: { [key: number]: string } = {
  1: CUBE_BLUE_IMAGE,
  2: CUBE_GREEN_IMAGE,
  3: CUBE_RED_IMAGE,
  4: CUBE_YELLOW_IMAGE,
};

export class Cube {
  public static readonly width: number = 128;
  public static readonly height: number = 64;
}
