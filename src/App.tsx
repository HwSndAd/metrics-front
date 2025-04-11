import './App.css'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <NavBar />
      <div className='min-h-screen  bg-gray-100'>
        <Home />
      </div>
    </>
  )
}

export default App
