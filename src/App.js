import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Index from './pages/Index'
import woodBg from '../src/images/woodBg.jpg'
import bookShelfBg from '../src/images/bookShelfBg.jpg'
import './styles.sass'

export default function App() {
  return (
    <div className="App">
      <Header woodBg={woodBg}  />
      <Routes>
        <Route path='/' element={<Home bookShelfBg={bookShelfBg}/>} />
        <Route path='/books' element={<Index />} />
      </Routes>
      <Footer woodBg={woodBg} />
    </div>
  )
}
