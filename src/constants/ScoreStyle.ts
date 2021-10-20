import { CanvasSingleton } from '~/CanvasSingleton';

export class ScoreStyle {
  public static readonly OFFSET_HORIZONTAL: number = CanvasSingleton.canvas.width - 10;
  public static readonly OFFSET_VERTICAL: number = CanvasSingleton.canvas.width * 0.05;
  public static readonly GAP_TEXT: number = 5;
  public static readonly FONT_SIZE: number = CanvasSingleton.canvas.width * 0.02;
  public static readonly FONT_FAMILY: string = 'generation';
  public static readonly GAP: number = CanvasSingleton.canvas.width * 0.04;
}
