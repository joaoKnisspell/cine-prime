//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//Pages
import Home from './pages/Home';
import Filme from './pages/Filme';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Favoritos from './pages/Favoritos';
import NotFound from './pages/NotFound';

const RoutesApp = () => {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element = {<Filme />} />
            <Route path="/favoritos" element = {<Favoritos/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
          <ToastContainer autoClose={2000}/>
        </BrowserRouter>
    </>
  )
}

export default RoutesApp