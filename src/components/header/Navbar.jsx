import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <main className="main-container">
            <nav className='nav-container'>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <div className="nav-links">
                    <h4><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></h4>
                    <h4><NavLink to="/courses" className={({ isActive }) => isActive ? 'active-link' : ''}>Courses</NavLink></h4>
                    <h4><NavLink to="/admissions" className={({ isActive }) => isActive ? 'active-link' : ''}>Admissions</NavLink></h4>
                    <h4><NavLink to="/achievements" className={({ isActive }) => isActive ? 'active-link' : ''}>Achievements</NavLink></h4>
                    <h4><NavLink to="/faculty" className={({ isActive }) => isActive ? 'active-link' : ''}>Faculty</NavLink></h4>
                    <h4><NavLink to="/about-us" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink></h4>
                    <h4><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact Us</NavLink></h4>
                    <i className={`ri-pentagon-line ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
                </div>
            </nav>

            {/* Sidebar with Close Icon */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <i className={`ri-pentagon-line ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
                </div>
                <div className="sidebar-links">
                    <h4><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Home</NavLink></h4>
                    <h4><NavLink to="/courses" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Courses</NavLink></h4>
                    <h4><NavLink to="/admissions" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Admissions</NavLink></h4>
                    <h4><NavLink to="/achievements" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Achievements</NavLink></h4>
                    <h4><NavLink to="/faculty" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Faculty</NavLink></h4>
                    <h4><NavLink to="/about-us" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>About Us</NavLink></h4>
                    <h4><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeSidebar}>Contact Us</NavLink></h4>
                </div>
            </div>
        </main>
    );
};

export default Navbar;
