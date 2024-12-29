import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store } from './features/store';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/register" element={<div>Register Page</div>} />
            <Route path="/todos" element={<div>Todo List Page</div>} />
            <Route path="/" element={<Navigate to="/todos" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
