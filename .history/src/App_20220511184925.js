import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
