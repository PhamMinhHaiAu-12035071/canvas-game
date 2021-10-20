import { IScreen, RouteScreen } from '~/types';
import { MenuGame } from '~/screens/MenuGame/MenuGame';
import { RoundOne } from '~/screens/RoundOne/RoundOne';

export class RouteSingleton {
  static instance: RouteSingleton;
  private static _initial: string;
  private static _screens: Array<RouteScreen>;
  private constructor() {}

  public static getInstance(): RouteSingleton {
    if (!RouteSingleton.instance) {
      RouteSingleton.instance = new RouteSingleton();
      RouteSingleton._screens = [
        {
          key: 'MenuGame',
          screen: new MenuGame(),
        },
        {
          key: 'RoundOne',
          screen: new RoundOne(),
        },
      ];
      RouteSingleton._initial = RouteSingleton._screens[0].key;
    }
    return RouteSingleton.instance;
  }

  // Getters
  public getCurrentScreen(): IScreen | undefined {
    const findResult: RouteScreen | undefined = RouteSingleton._screens.find(
      (item) => item.key === RouteSingleton._initial
    );
    if (findResult) {
      return findResult.screen;
    }
    return undefined;
  }

  // Setters
  public navigate(key: string): boolean {
    const findIndex: number = RouteSingleton._screens.findIndex((item) => item.key === key);
    if (findIndex !== -1) {
      RouteSingleton._initial = RouteSingleton._screens[findIndex].key;
      return true;
    }
    return false;
  }
}
