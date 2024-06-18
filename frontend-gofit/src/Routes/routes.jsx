import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound';
// import Dashboard from '../Pages/Dashboard';
// import About from '../Pages/About';  
// import Contact from '../Pages/Contact';
// import NotFound from '../Pages/NotFound';
// import Services from '../Pages/Services';
// import Diet from '../Pages/DietPage';
// import ProfilePage from '../Pages/ProfilePage';
// import WorkoutPage from '../Pages/WorkoutPage';

// import Admin from '../Components/Admin/Admin';
// import Register from '../Components/Register/Register';
// import Profile from '../Components/Profile/Profile';
// import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
// import AdminProfile from '../Components/AdminProfile/AdminProfile';
// import AdminUsers from '../Components/AdminUsers/AdminUsers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/workout" element={<WorkoutPage />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-profile" element={<AdminProfile />} />
      <Route path="/admin-users" element={<AdminUsers />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
