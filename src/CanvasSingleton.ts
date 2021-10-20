import { Utils } from '~/utils';

export class CanvasSingleton {
  private static instance: CanvasSingleton;
  public static canvas: HTMLCanvasElement = Utils.setupCanvas(document.querySelector('#game') as HTMLCanvasElement);
  public static context: CanvasRenderingContext2D | null = CanvasSingleton.canvas.getContext('2d');
  private constructor() {}

  public static getInstance(): CanvasSingleton {
    if (!CanvasSingleton.instance) {
      CanvasSingleton.instance = new CanvasSingleton();
    }
    return CanvasSingleton.instance;
  }

  public static clear(): void {
    CanvasSingleton.context?.clearRect(0, 0, CanvasSingleton.canvas.width, CanvasSingleton.canvas.height);
  }
}
