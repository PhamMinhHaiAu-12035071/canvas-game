export class TimerGameWin {
  static instance: TimerGameWin;
  private static _now: number;
  private static _isShow: boolean;

  public static getInstance(): TimerGameWin {
    if (!TimerGameWin.instance) {
      TimerGameWin.instance = new TimerGameWin();
      this._now = new Date().getTime();
    }
    return TimerGameWin.instance;
  }

  public now(): number {
    return TimerGameWin._now;
  }

  public setTime(time: number): void {
    TimerGameWin._now = time;
  }

  public getIsShow(): boolean {
    return TimerGameWin._isShow;
  }
  public setIsShow(isShow: boolean): void {
    TimerGameWin._isShow = isShow;
  }
}
