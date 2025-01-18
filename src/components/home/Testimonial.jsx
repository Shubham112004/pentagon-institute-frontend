import React, { useEffect, useState } from "react";

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Testimonial data
    const testimonials = [
        {
            name: "John Doe",
            position: "IIT-JEE AIR-1 (2020)",
            message: "This is the best learning platform I’ve ever experienced!",
        },
        {
            name: "Jane Smith",
            position: "NEET Topper (2021)",
            message: "Pentagon transformed my preparation into success!",
        },
        {
            name: "Rajesh Kumar",
            position: "All India Rank 10 (2022)",
            message: "The mentors and resources here are top-notch!",
        },
        {
            name: "Ananya Singh",
            position: "IIT-Bombay Student",
            message: "Highly recommended for aspiring engineers and doctors.",
        },
    ];

    const totalSlides = testimonials.length;

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 2500);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div className="testimonial-carousel-container">
                <div className="testimonial-carousel-content">
                    <div className="testimonial">
                        <p className="testimonial-message">{testimonials[currentSlide].message}</p>
                        <h3 className="testimonial-name">{testimonials[currentSlide].name}</h3>
                        <p className="testimonial-position">{testimonials[currentSlide].position}</p>
                    </div>
                </div>
                <div className="testimonial-carousel-footer">
                    <button className="prev-btn" onClick={handlePrev}>
                        &#8592;
                    </button>
                    <span>
                        <span style={{ color: "#f80010" }}>WHAT OUR STUDENTS SAY</span> - Inspiring Journeys from{" "}
                        <span style={{ color: "#2a1184" }}>ENGINEERS</span> &{" "}
                        <span style={{ color: "#2a1184" }}>DOCTORS</span>
                    </span>

                    <button className="next-btn" onClick={handleNext}>
                        &#8594;
                    </button>
                </div>
            </div>
            <div className="bottom-space"></div>
        </div>
    );
};

export default Testimonial;
