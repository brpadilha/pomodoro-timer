import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
