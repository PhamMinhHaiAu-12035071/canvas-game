export class TimerReadyText {
  static instance: TimerReadyText;
  private static _now: number;
  private static _isShow: boolean;

  public static getInstance(): TimerReadyText {
    if (!TimerReadyText.instance) {
      TimerReadyText.instance = new TimerReadyText();
      this._now = new Date().getTime();
      this._isShow = false;
    }
    return TimerReadyText.instance;
  }

  public now(): number {
    return TimerReadyText._now;
  }

  public setTime(time: number): void {
    TimerReadyText._now = time;
  }

  public setIsShow(isShow: boolean): void {
    TimerReadyText._isShow = isShow;
  }
  public getIsShow(): boolean {
    return TimerReadyText._isShow;
  }
}
