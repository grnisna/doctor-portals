import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Footer from './pages/SharedPage/Footer/Footer';
import Navbar from './pages/SharedPage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<About></About>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
