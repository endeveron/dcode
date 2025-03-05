export interface INavItem {
  to: string;
  label: string;
  iconName: string;
}

export const navItemsData: INavItem[] = [
  {
    to: '/',
    label: 'Feed',
    iconName: 'home',
  },
  {
    to: '/user',
    label: 'User',
    iconName: 'person',
  },
];
