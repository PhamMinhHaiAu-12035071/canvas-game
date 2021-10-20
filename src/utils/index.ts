import { Circle, Shape, Vector } from '~/types';

export class Utils {
  public static setupCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement {
    // Get the device pixel ratio, falling back to 1.
    const dpr = window.devicePixelRatio || 1;
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return canvas;
  }

  public static loadImages(images: Array<string>, onComplete: Function): void {
    const imageObjects: Array<HTMLImageElement> = [];
    let loaded = 0;

    function onLoad() {
      loaded++;
      if (loaded == images.length) {
        onComplete();
      }
    }

    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.addEventListener('load', onLoad);
      img.src = images[i];
      imageObjects.push(img);
    }
  }
  public static detectCollisionBetweenRectAndCircle(circle: Circle, rect: Shape): boolean {
    const distance: Vector = {
      x: Math.abs(circle.position.x - rect.position.x),
      y: Math.abs(circle.position.y - rect.position.y),
    };
    if (distance.x > rect.width / 2 + circle.r) {
      return false;
    }
    if (distance.y > rect.height / 2 + circle.r) {
      return false;
    }
    if (distance.x <= rect.width / 2) {
      return true;
    }
    if (distance.y <= rect.height / 2) {
      return true;
    }
    const cDist_sq = Math.pow(distance.x - rect.width / 2, 2) + Math.pow(distance.y - rect.height / 2, 2);
    return cDist_sq <= Math.pow(circle.r, 2);
  }
}
