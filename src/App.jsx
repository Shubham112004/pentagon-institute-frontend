import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import MainLayout from "./layout/MainLayout";
import BlankLayout from "./layout/BlankLayout";

import Home from "./components/home/Index";
import CoursesPage from "./components/courses/Index";
import AdmissionsPage from "./components/admissions/Index";
import Achievements from "./components/achievements/Index";
import Faculty from "./components/faculty/Index";
import AboutUs from "./components/aboutus/Index";
import ContactUs from "./components/contactus/Index";
import Login from "./components/login/Index";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

        {/* Routes without Navbar and Footer */}
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
