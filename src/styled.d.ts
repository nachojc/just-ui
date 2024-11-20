import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}


declare module "styled-components" {
  export interface DefaultTheme extends defaultTheme  {
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
