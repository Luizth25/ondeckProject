import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <p>Ola mundo</p>
  </ThemeProvider>
);

export default App;
