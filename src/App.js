import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Plans from "./pages/Plans/Plans";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar';




function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='gallery' element={<Gallery/>} />
            <Route path='plans' element={<Plans/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
