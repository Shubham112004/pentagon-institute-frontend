import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vision from '../../assets/vision.jpg'
import visionVid from '../../assets/visionVid.mp4'

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const image = imageRef.current;

        // Animate text content
        gsap.fromTo(
            content,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%", // Starts animation when section enters 80% of the viewport
                    end: "top 30%", // Ends when section reaches 20% of the viewport
                    scrub: false,
                },
            }
        );

        // Animate image
        gsap.fromTo(
            image,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "top 30%",
                    scrub: false,
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="vision-scroll-section">
            <div ref={contentRef} className="vision-content">
                <h2 className="vision-title">Our Vision</h2>
                <p className="vision-text">
                    To become the most <span className="highlight">trusted</span> and{" "}
                    <span className="highlight">innovative</span> education partner,
                    empowering students to excel in competitive exams and achieve their
                    dreams.
                </p>
                <button className="cta-button">Explore Our Mission</button>
            </div>

            <div ref={imageRef} className="vision-illustration">
                {/* <img
                    src={vision}
                    alt="Our Vision"
                    className="vision-image"
                /> */}
                {/* <video src={visionVid} className="vision-image" autoPlay muted loop></video> */}
                <video preload="metadata" className="vision-image" autoPlay muted loop width="100%">
                    <source src={visionVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default Vision;
