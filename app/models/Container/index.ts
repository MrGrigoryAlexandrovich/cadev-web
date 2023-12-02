export interface IContainerHeaderComponent {
  readonly title: string;
}

export interface IContainerItemComponent extends IContainerHeaderComponent {
  readonly icon: JSX.Element;
}
