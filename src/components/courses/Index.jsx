import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const coursesData = [
    {
        name: "IIT-JEE (Mains & Advanced)",
        description: "Comprehensive preparation for IIT-JEE with offline tests, study material, and expert faculty.",
        duration: "1 Year Program | 5 days/week",
        target: "For 11th and 12th-grade students",
        icon: "🎓",
        faculty: [
            { name: "Dr. John Doe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s" },
            { name: "Prof. Jane Smith", image: "https://img.freepik.com/free-vector/recruitment-process-illustration_24877-60168.jpg?uid=R171420775&ga=GA1.1.172609253.1727607505&semt=ais_hybrid" },
            { name: "Prof. Alex Mith", image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R171420775&ga=GA1.1.172609253.1727607505&semt=ais_hybrid" }
        ]
    },
    {
        name: "MHT-CET",
        description: "Offline coaching for engineering and medical entrance exams with regular tests and guidance.",
        duration: "1 Year Program | Evening Batches",
        target: "For 12th-grade students",
        icon: "📚",
        faculty: [
            { name: "Dr. John Doe", image: "/path/to/faculty1.jpg" },
            { name: "Prof. Jane Smith", image: "/path/to/faculty2.jpg" }
        ]
    },
    {
        name: "NEET",
        description: "Focused NEET preparation with personalized doubt-solving sessions and curated study material.",
        duration: "1 Year Program | Morning Batches",
        target: "For aspiring medical students",
        icon: "🩺",
        faculty: [
            { name: "Dr. John Doe", image: "/path/to/faculty1.jpg" },
            { name: "Prof. Jane Smith", image: "/path/to/faculty2.jpg" }
        ]
    },
    {
        name: "10th Class Coaching",
        description: "Excel in board exams with expert guidance, concept clarity, expert guidance, concept clarity.",
        duration: "1 Year Program | Weekday Classes",
        target: "For 10th-grade students",
        icon: "✏️",
        faculty: [
            { name: "Dr. John Doe", image: "/path/to/faculty1.jpg" },
            { name: "Prof. Jane Smith", image: "/path/to/faculty2.jpg" }
        ]
    },
];

const CoursesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        // GSAP animation for cards
        gsap.fromTo(
            ".course-page-card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div className="home-container">

            <section className="courses-page-section">
                <h2 className="courses-page-heading">Our Courses</h2>
                <p className="courses-page-subheading">
                    Explore our offline classes tailored for IIT-JEE, MHT-CET, NEET, and 10th-class success.
                </p>
                <div className="courses-page-container">
                    {coursesData.map((course, index) => (
                        <div className="course-page-card" key={index}>
                            <div className="course-page-icon">{course.icon}</div>
                            <h3 className="course-page-title">{course.name}</h3>
                            <p className="course-page-description">{course.description}</p>
                            {/* <p className="course-page-duration">{course.duration}</p>
                        <p className="course-page-target">{course.target}</p> */}
                            <button className="course-page-btn" onClick={() => openModal(course)}>Learn More</button>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && selectedCourse && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>{selectedCourse.name}</h3>
                            <p>{selectedCourse.description}</p>
                            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                            <p><strong>Target:</strong> {selectedCourse.target}</p>
                            <div className="faculty-section">
                                <h4>Instructors</h4>
                                <div className="faculty-list">
                                    {selectedCourse.faculty.map((faculty, index) => (
                                        <div className="faculty-card" key={index}>
                                            <img src={faculty.image} alt={faculty.name} />
                                            <p>{faculty.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="course-page-btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
                <section className="courses-feature-section">
                    <h2 className="feature-section-heading">Why Choose Our Courses?</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <h3>Expert Faculty</h3>
                            <p>Our courses are taught by experienced instructors who have years of teaching experience and expertise in their fields.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Comprehensive Study Material</h3>
                            <p>We provide comprehensive study material, including notes, online resources, and practice tests.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Personalized Coaching</h3>
                            <p>Our coaching is tailored to individual student needs, ensuring a more focused and effective learning experience.</p>
                        </div>
                    </div>
                </section>
                <section className="cta-section">
                    <h2 className="cta-heading">Ready to Start Your Journey?</h2>
                    <p className="cta-text">Join thousands of successful students who have cleared their exams with our expert coaching. Enroll today and get started!</p>
                    <button className="cta-btn">Enroll Now</button>
                </section>

            </section>

        </div>
    );
};

export default CoursesPage;
