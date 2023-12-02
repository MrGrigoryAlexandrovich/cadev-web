export interface IMenuComponent {
  readonly open: boolean;
  readonly mobileDrawerOpen: boolean;
  readonly desktop: boolean;
  readonly mobile: boolean;
  readonly isMobleDrawerClosing: boolean;
  readonly setOpen: (value: boolean) => void;
  readonly setMobileDrawerOpen: (value: boolean) => void;
  readonly closeMobileDrawer: () => void;
}

export interface IMenuItemComponent {
  readonly open: boolean;
  readonly icon: React.ReactNode;
  readonly text: string;
  readonly routes: string;
  readonly mobile: boolean;
  readonly setMobileDrawerOpen: (value: boolean) => void;
}
