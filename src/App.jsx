import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import AllFacultyPage from './Pages/AllFacultyPage'
import AboutPage from './Pages/AboutPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/all-faculties' element={<AllFacultyPage />} />
          </Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
