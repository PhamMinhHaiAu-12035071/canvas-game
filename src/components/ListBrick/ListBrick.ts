import { IComponent } from '~/types';
import { Brick } from '~/components/Brick/Brick';
import { Background } from '~/components/SceneGame/styles';
import { BrickStyle } from '~/components/ListBrick/styles';
import CUBE_BLUE_IMAGE from '~/assets/images/cube_blue.png';
import CUBE_GREEN_IMAGE from '~/assets/images/cube_green.png';
import CUBE_RED_IMAGE from '~/assets/images/cube_red.png';
import CUBE_YELLOW_IMAGE from '~/assets/images/cube_yellow.png';

export const BRICK_IMAGE: { [key: number]: string } = {
  1: CUBE_BLUE_IMAGE,
  2: CUBE_GREEN_IMAGE,
  3: CUBE_RED_IMAGE,
  4: CUBE_YELLOW_IMAGE,
};

export class ListBrick implements IComponent {
  private _arr: Array<Brick>;
  constructor() {
    this._arr = [];
  }

  draw(level: Array<Array<number>>): void {
    this._arr = [];
    const { width, height } = BrickStyle(Background.width / level[0].length);
    level.map((row, rowIndex) => {
      const y = Background.y + rowIndex * height;
      row.map((item, columnIndex) => {
        const x = Background.x + columnIndex * width;
        if (item !== 0) {
          const brick = new Brick(width, height, { x, y }, BRICK_IMAGE[item], rowIndex, columnIndex);
          this._arr.push(brick);
          brick.draw();
        }
      });
    });
  }

  // Getters
  get arr(): Array<Brick> {
    return this._arr;
  }

  public remove(index: number): boolean {
    if (index > 0 && index < this._arr.length) {
      this._arr.splice(index, 1);
      return true;
    }
    return false;
  }
}
