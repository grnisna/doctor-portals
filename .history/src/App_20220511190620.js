import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/SharedPage/Footer/Footer';
import Navbar from './pages/SharedPage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
