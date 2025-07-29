  import logo from './logo.svg';
  import {Routes, Route, Navigate} from 'react-router-dom';
  import './App.css';
  import Login from './pages/auth/Login';
  import Register from './pages/auth/Register';
  import AboutPage from './components/AboutPage';
import AppLayout from './components/AppLayout';
import UserProfile from './components/UserProfile';

  export default function App() {
    return (
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/" element={<AppLayout />} />
        <Route path="/profile" element={<UserProfile />}/>
      </Routes>
    );
  }


