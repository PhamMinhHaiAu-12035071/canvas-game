export class TimerRoundText {
  static instance: TimerRoundText;
  private static _now: number;
  private static _isShow: boolean;

  public static getInstance(): TimerRoundText {
    if (!TimerRoundText.instance) {
      TimerRoundText.instance = new TimerRoundText();
      this._now = new Date().getTime();
      this._isShow = true;
    }
    return TimerRoundText.instance;
  }

  public now(): number {
    return TimerRoundText._now;
  }

  public setTime(time: number): void {
    TimerRoundText._now = time;
  }

  public setIsShow(isShow: boolean): void {
    TimerRoundText._isShow = isShow;
  }
  public getIsShow(): boolean {
    return TimerRoundText._isShow;
  }
}
