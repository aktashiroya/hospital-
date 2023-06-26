import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './user/Dashboard';
import Dashboard2 from './admin/Dashboard2';
import Login from './admin/Login';
import Register from './admin/Register';
import Logout from './admin/Logout';
import Add_doctor from './admin/doctor/Add_doctor';
import All_doctor from './admin/doctor/All_doctor';
import Profile from './admin/doctor/Profile';
import Add_Appointment from './admin/doctor/Add_Appointment';
import All_Appointment from './admin/doctor/All_Appointment';
import Doctor_pro from './admin/doctor/Doctor_pro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={window.localStorage.getItem('id') === null ? <Login /> : <Dashboard2 />} />
        <Route path='/Dashboard2' element={(window.localStorage.getItem('id') !== null) ? <Dashboard2 /> : <Login />} />
        <Route path='/Register' element={(window.localStorage.getItem('id') !== null) ? <Dashboard2 /> : <Register />} />

        <Route path="/Dashboard2" element={<Dashboard2 />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path='/Register' element={<Register />} /> */}

        <Route path='/Doctor_pro' element={<Doctor_pro />} />

        <Route path='/Add_doctor' element={<Add_doctor />} />
        <Route path='/All_doctor' element={<All_doctor />} />
        <Route path='/Profile/:id' element={<Profile />} />

        <Route path='/Add_Appointment' element={<Add_Appointment />} />
        <Route path='/All_Appointment' element={<All_Appointment />} />

        <Route path='/Logout' element={<Logout />} />
      </Routes>
    </div>
  );
}
export default App;
