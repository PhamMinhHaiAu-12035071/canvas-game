export class TimerEnterText {
  static instance: TimerEnterText;
  private static _now: number;
  private static _color: string;

  public static getInstance(): TimerEnterText {
    if (!TimerEnterText.instance) {
      TimerEnterText.instance = new TimerEnterText();
      this._now = new Date().getTime();
      this._color = 'red';
    }
    return TimerEnterText.instance;
  }

  public now(): number {
    return TimerEnterText._now;
  }

  public setTime(time: number): void {
    TimerEnterText._now = time;
  }

  public getColor(): string {
    return TimerEnterText._color;
  }

  public changeColor(): void {
    if (TimerEnterText._color === 'red') {
      TimerEnterText._color = 'yellow';
    } else {
      TimerEnterText._color = 'red';
    }
  }
}
