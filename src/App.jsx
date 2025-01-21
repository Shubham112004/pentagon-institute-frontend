import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/header/Navbar";
import 'remixicon/fonts/remixicon.css';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/home/Index'; // Home component
import CoursesPage from './components/courses/Index'; // Courses component
import AdmissionsPage from './components/admissions/Index';
import Achievements from './components/achievements/Index';
import Faculty from './components/faculty/Index';
import AboutUs from './components/aboutus/Index';
import ContactUs from './components/contactus/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
