import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof themeColors;
  }
}

const themeColors = {
  background: "#f1e3d3",
  corTitulo: "#0e0e0e",
  corDeTexto: "#5f5f5f",
  corDeTextoSecundaria: "#f0e5a1",
  corPrimaria: "#c2855f",
  corBotaoPrimaria: "#42613d",
  corBotaoSecundaria: "#233a1f",
};

const theme = {
  colors: themeColors,
};

export default theme;
