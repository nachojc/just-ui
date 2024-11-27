import type { Font } from "@/styles/themes/default/fonts";
import type { Size } from "@/styles/themes/default/size";
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    size: Size;
    font: Font;
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    //   palette: {
    //     colors: { [key: string]: string };
    //     common: {
    //       black: string;
    //       white: string;
    //     };
    //     primary: IPalette;
    //     secondary: IPalette;
    //   };
    //   font: {[key:string]:string}
  }
}
