import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh] bg-gray-100'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
