import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
