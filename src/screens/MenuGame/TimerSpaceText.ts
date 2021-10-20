export class TimerSpaceText {
  static instance: TimerSpaceText;
  private static _now: number;
  private static _color: string;

  public static getInstance(): TimerSpaceText {
    if (!TimerSpaceText.instance) {
      TimerSpaceText.instance = new TimerSpaceText();
      this._now = new Date().getTime();
      this._color = 'yellow';
    }
    return TimerSpaceText.instance;
  }

  public now(): number {
    return TimerSpaceText._now;
  }

  public setTime(time: number): void {
    TimerSpaceText._now = time;
  }

  public getColor(): string {
    return TimerSpaceText._color;
  }

  public changeColor(): void {
    if (TimerSpaceText._color === 'yellow') {
      TimerSpaceText._color = 'white';
    } else {
      TimerSpaceText._color = 'yellow';
    }
  }
}
