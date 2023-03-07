import './App.css';
import AdminDash from './components/AdminDash/AdminDash';
import AnalystDash from './components/AnalystDash/AnalystDash';
import EngineerDash from './components/EngineerDash/EngineerDash';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme'
import Container from './components/layout/Container/Container';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Container>
          <Routes>
            <Route path="/AdminDash" element={<AdminDash />} />
            <Route path="/AnalystDash" element={<AnalystDash />} />
            <Route path="/EngineerDash" element={<EngineerDash />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
