import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/login/Login'
import EditarUsuario from './components/editarUsuario/EditarUsuario'
import ExportarFicha from './util/ExportarFicha'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer />
      {location.pathname !== '/login' && <NavBar />} 
        <div className='min-h-[80vh] bg-gray-100'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<Admin />} />

            <Route path='/editar-usuario' element={<EditarUsuario />}/>
            <Route path='/view' element={<ExportarFicha />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
