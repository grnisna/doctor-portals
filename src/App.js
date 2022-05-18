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
import MyAppointment from './pages/Dashboard/MyAppointment';
import Review from './pages/Dashboard/Review';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';
import ManageDoctors from './pages/Dashboard/ManageDoctors';


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


        <Route path='/dashboard'  element={<RequireAuth>   <Dashboard></Dashboard>   </RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>} ></Route>
          <Route path='/dashboard/review' element={<Review></Review>} ></Route>
          <Route path='/dashboard/users' element={<RequireAdmin>  <Users></Users> </RequireAdmin>}></Route>
          <Route path='/dashboard/addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor> </RequireAdmin>}></Route>
          <Route path='/dashboard/manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>


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
