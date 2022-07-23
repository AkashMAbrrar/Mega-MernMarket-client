import { Box } from '@mui/material';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Box style={{ marginTop: 55 }}>
        <Home></Home>
      </Box>
    </div>
  );
}

export default App;
