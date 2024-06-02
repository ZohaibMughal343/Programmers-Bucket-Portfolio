import './App.css'
import Home from './Components/Pages/Home';
import Thankyou from './Components/Pages/Thankyou';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Thankyou' element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
