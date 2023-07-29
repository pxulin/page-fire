import React from "react"
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import Home from './pages/Home/Home'
import NavBar from './componentes/Nav/NavBar'
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./PrivateRoute/PrivateRoute.page"

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/home' element={
          <ProtectedRoute>
            <NavBar />
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthContextProvider>
  );
}
export default App