import './App.css';
import Menu from './Pages/menu';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Menu />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
