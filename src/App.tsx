import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/login/Login'
import EditarUsuario from './components/editarUsuario/EditarUsuario'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      {location.pathname !== '/login' && <NavBar />} 
        <div className='min-h-[80vh] bg-gray-100'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<Admin />} />

            <Route path='/editar-usuario' element={<EditarUsuario />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
