import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import {defaultTheme as theme} from '../styles/themes/default';

export const  wrapWithTheme = ( children: ReactNode) => {

    return <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>



}
