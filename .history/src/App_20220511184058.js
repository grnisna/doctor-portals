import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/SharedPage/Footer/Footer';
import Navbar from './pages/SharedPage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
