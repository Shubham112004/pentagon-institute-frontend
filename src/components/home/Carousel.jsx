import React, { useEffect, useState } from "react";
import b1 from '../../assets/banner1.jpg'
import b2 from '../../assets/banner2.jpg'
import b3 from '../../assets/banner3.jpg'
import b4 from '../../assets/banner4.jpg'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Add your image URLs here
    const slides = [
        {

            imageUrl: "https://media1.thehungryjpeg.com/thumbs2/ori_3868174_1m1bgeptgbsf5x6zkwut1fcvwlkvu7mm631ij7d6_feminine-podcaster-instagram-carousel-keynote-template.png",
        },
        {
            imageUrl: "https://media1.thehungryjpeg.com/thumbs2/ori_3868386_8rsvpp698ne9rzs1jn64lssdzoejryb7w3rz0y2u_traveling-agency-instagram-carousel-keynote-template.png",
        },
        {
            imageUrl: "https://media1.thehungryjpeg.com/thumbs2/ori_3868394_w4g6at3kj9nmv0sfx929k5enumvy5nh1ljc52clx_traveling-tips-camping-instagram-carousel-keynote-template.png",
        },
        {
            imageUrl: "https://media1.thehungryjpeg.com/thumbs2/ori_3868399_j3v6znt122iw4dp4yxse5pn8nb4nz6zm9ev1jwdi_professional-resume-online-instagram-carousel-keynote-template.png",
        },
    ];

    const totalSlides = slides.length;

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
        <div className="carousel-container">
            <div className="carousel-content">
                <img
                    src={slides[currentSlide].imageUrl}
                    alt={`Slide ${currentSlide + 1}`}
                    className="carousel-image"
                />
            </div>
            <div className="carousel-footer">
                <button className="prev-btn" onClick={handlePrev}>
                    &#8592;
                </button>
                <span><span style={{ color: '#f80010' }}>PENTAGON</span> - The Factory To Create <span style={{ color: '#2a1184' }}>ENGINEERS</span> & <span style={{ color: '#2a1184' }}>DOCTORS</span></span>
                <button className="next-btn" onClick={handleNext}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
