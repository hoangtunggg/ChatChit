  import logo from './logo.svg';
  import {Routes, Route, Navigate} from 'react-router-dom';
  import './App.css';
  import Login from './pages/auth/Login';
  import Register from './pages/auth/Register';
  import AboutPage from './components/AboutPage';
import AppLayout from './components/AppLayout';

  export default function App() {
    return (
      <Routes>
        <Route path="" element={<Navigate to = "/login" />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/home" element={<AppLayout />}/>
      </Routes>
    );
  }


