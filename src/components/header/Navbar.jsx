import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="main-container">
            <nav className='nav-container'>
                <img src={logo} alt="Logo" />
                <div className="nav-links">
                    <h4><a href="">Home</a></h4>
                    <h4><a href="">Courses</a></h4>
                    <h4><a href="">Admissions</a></h4>
                    <h4><a href="">Achievements</a></h4>
                    <h4><a href="">Faculty</a></h4>
                    <h4><a href="">About Us</a></h4>
                    <h4><a href="">Contact Us</a></h4>
                    <i className={`ri-pentagon-line ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
                </div>
            </nav>

            {/* Sidebar with Close Icon */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <i className={`ri-pentagon-line ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
                </div>
                <div className="sidebar-links">
                    <h4><a href="">Home</a></h4>
                    <h4><a href="">Courses</a></h4>
                    <h4><a href="">Admissions</a></h4>
                    <h4><a href="">Achievements</a></h4>
                    <h4><a href="">Faculty</a></h4>
                    <h4><a href="">About Us</a></h4>
                    <h4><a href="">Contact Us</a></h4>
                </div>
            </div>
        </main>
    );
};

export default Navbar;
