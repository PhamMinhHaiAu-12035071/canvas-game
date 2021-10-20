// Shared types
export interface IComponent {
  draw(...rest: any): void;
}
export interface IScreen {
  drawScreen(...rest: any): void;
}
export interface RouteScreen {
  key: string;
  screen: IScreen;
}
export type Vector = {
  x: number;
  y: number;
};

export type Shape = {
  width: number;
  height: number;
  position: Vector;
};
export type Circle = {
  r: number;
  position: Vector;
};
