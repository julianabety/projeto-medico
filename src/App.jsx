import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './globalStyle.scss';
import Home from './pages/home/Home';
import Voluntario from './pages/voluntario/Voluntario';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/voluntario' element={<Voluntario/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
