import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    { id: 1, title: "Graduates", value: 5000, suffix: "+", description: "Skilled professionals graduated successfully." },
    { id: 2, title: "Courses Offered", value: 100, suffix: "+", description: "Comprehensive and modern courses available." },
    { id: 3, title: "Placements", value: 90, suffix: "%", description: "Successful placement rate across industries." },
    { id: 4, title: "Awards", value: 50, suffix: "+", description: "Recognized for excellence in education." },
];

const Achievements = () => {
    const counters = useRef([]);

    useEffect(() => {
        // Scroll trigger for the entire achievements section
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".achievements",
            start: "top 85%",
            end: "top 30%",
            onEnter: () => {
                // Animate cards and counters when section is in view
                animateCardsAndCounters();
            },
            onLeaveBack: () => {
                // Optionally reset animations if needed when leaving the section
                gsap.to(".achievement-item", { opacity: 0, y: 50 });
                gsap.to(counters.current, { innerText: 0 });
            },
        });

        // Function to animate cards and counters simultaneously
        const animateCardsAndCounters = () => {
            // Card animation
            gsap.fromTo(
                ".achievement-item",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.3,
                    duration: 1.2,
                    ease: "power3.out",
                }
            );

            // Counter animation
            achievements.forEach((achievement, index) => {
                const counter = counters.current[index];
                gsap.fromTo(
                    counter,
                    { innerText: 0 },
                    {
                        innerText: achievement.value,
                        duration: 2,
                        ease: "power1.out",
                        snap: { innerText: 1 }, // Snap values to integers
                        onUpdate: function () {
                            counter.innerText = `${Math.ceil(counter.innerText)}${achievement.suffix}`;
                        },
                    }
                );
            });
        };

        // Cleanup ScrollTrigger
        return () => {
            scrollTrigger.kill();
        };
    }, []);

    return (
        <section className="achievements">
            <div className="container">
                <h2 className="section-title">Our Achievements</h2>
                <p className="section-subtitle">
                    Here's what we’ve accomplished together with our students and staff.
                </p>
                <div className="achievement-list">
                    {achievements.map((achievement, index) => (
                        <div key={achievement.id} className="achievement-item">
                            <div
                                className="achievement-icon"
                                ref={(el) => (counters.current[index] = el)}
                            >
                                0{achievement.suffix}
                            </div>
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-description">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
