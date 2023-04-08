import { ThemeProvider } from "styled-components";

import Login from "./pages/Login";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Login />
  </ThemeProvider>
);

export default App;
