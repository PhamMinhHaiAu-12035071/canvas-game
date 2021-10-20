const WIDTH = 128;
const HEIGHT = 64;

export const BrickStyle = (widthExpected: number) => ({
  width: widthExpected,
  height: (HEIGHT * widthExpected) / WIDTH,
});
