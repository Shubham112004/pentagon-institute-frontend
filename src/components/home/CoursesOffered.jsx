import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
    { title: "MHT-CET", description: "Learn HTML, CSS, JavaScript, React, and more." },
    { title: "IIT-JEE", description: "Master Python, R, Machine Learning, and AI." },
    { title: "NEET", description: "Design stunning interfaces with Figma and Adobe XD." },
    { title: "11th - 12th Classes", description: "SEO, SEM, Analytics, and modern marketing strategies." },
    { title: "10th Classes", description: "Build apps using Flutter and React Native." },
];

const CoursesGrid = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        // Ensure all cards are animated properly
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 }, // Start state
            {
                opacity: 1, y: 0, // End state
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".courses-grid",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse", // Animates when scrolled into view
                },
            }
        );
    }, []);

    return (
        <section className="courses-section">
            <h2 className="section-title">Courses Offered</h2>
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="course-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <div className="card-content">
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-description">{course.description}</p>
                            <button className="learn-more">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoursesGrid;
