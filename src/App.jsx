import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Doctors from './pages/Doctors/Doctors';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import AdminAppointments from './pages/AdminAppointments/AdminAppointments';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/appointments" element={<AdminAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
