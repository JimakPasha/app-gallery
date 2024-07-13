import { ILib } from './';

export interface IApp {
  appName: string;
  libs: Lib[];
  version: string;
  image: string;
}
