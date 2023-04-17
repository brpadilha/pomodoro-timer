import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  );
}

export default App;
