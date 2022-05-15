import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';

import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import Meet from './pages/Meet/Meet';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/SharedPage/Footer/Footer';
import Navbar from './pages/SharedPage/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/SharedPage/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'           element={<Home></Home>} ></Route>
        <Route path='/home'       element={<Home></Home>} ></Route>
        <Route path='/about'      element={<About></About>} ></Route>
        <Route path='/meet'       element={
          <RequireAuth>
            <Meet></Meet>
          </RequireAuth>
        } ></Route>
        <Route path='/dashboard'       element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } ></Route>
        <Route path='/reviews'    element={<Reviews></Reviews>} ></Route>
        <Route path='/contact'    element={<Contact></Contact>} ></Route>
        <Route path='/login'      element={<Login></Login>} ></Route>
        <Route path='/registration' element={<Registration></Registration>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
