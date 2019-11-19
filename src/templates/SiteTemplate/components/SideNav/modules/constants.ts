import { Path, routeTo } from 'src/router';

export enum SideNavMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const MENU = [
  { to: routeTo(Path.HOME), label: 'Home' },
  { to: routeTo(Path.USERS_ROOT), label: 'Users' },
];
