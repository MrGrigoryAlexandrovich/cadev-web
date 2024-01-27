import { StaticImageData } from "next/image";

export interface IAwardComponent {
  readonly title: string;
  readonly items: IAwardItem[];
}

export interface IAwardItem {
  readonly title: string;
  readonly image: StaticImageData;
  readonly subtitles: string[];
}
