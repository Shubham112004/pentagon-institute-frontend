import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/header/Navbar";
import 'remixicon/fonts/remixicon.css';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/home/Index'; // Home component
import CoursesPage from './components/courses/Index'; // Courses component
import AdmissionsPage from './components/admissions/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
