import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Kanban from './pages/Kanban';
import PasswordChangePage from './pages/PasswordChangePage'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')

  const handleLogin = (token: string) => {
    setToken(token)
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setToken('')
    setIsLoggedIn(false)
  }

  const handlePasswordChange = () => {
    setToken('')
    setIsLoggedIn(false)
    
  }

  const handleAddBoard = () => {
    setToken('')
  }

  console.log("isLogginedIn",isLoggedIn)
  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage onSuccess={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onSuccess={handleLogin} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Kanban onAddBoard = {handleAddBoard} onLogout={handleLogout} />}/>            
            <Route 
              path="/password-change" 
              element={<PasswordChangePage onPasswordChange={handlePasswordChange} istoken={token}/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
