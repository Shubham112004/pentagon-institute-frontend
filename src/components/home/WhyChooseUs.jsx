import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: "🎓",
        title: "Expert Faculty",
        description: "Learn from industry leaders with years of experience.",
    },
    {
        icon: "🏢",
        title: "Modern Labs",
        description: "State-of-the-art facilities for hands-on learning.",
    },
    {
        icon: "📈",
        title: "Career Growth",
        description: "Get placement support and career guidance.",
    },
    {
        icon: "📜",
        title: "Certifications",
        description: "Industry-recognized certificates to boost your career.",
    },
];

const WhyChooseUs = () => {
    useEffect(() => {
        gsap.fromTo(
            ".reason-item",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".why-choose-us",
                    start: "top 85%",
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.to(".floating-shape", {
            y: "10%",
            repeat: -1,
            yoyo: true,
            duration: 4,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <section className="why-choose-us">
            {/* Abstract Background */}
            <div className="background">
                <div className="floating-shape shape1"></div>
                <div className="floating-shape shape2"></div>
                <div className="floating-shape shape3"></div>
            </div>

            {/* Content */}
            <div className="container">
                {/* <h2 className="section-title">Why Choose Us?</h2>
                <p className="section-subtitle">
                    Discover the reasons why we’re the best choice for your success.
                </p> */}
                <div className="reasons-list">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-item">
                            <div className="icon">{reason.icon}</div>
                            <div className="reason-text">
                                <h3 className="reason-title">{reason.title}</h3>
                                <p className="reason-description">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
