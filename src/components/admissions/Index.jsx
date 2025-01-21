import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Admissions = () => {
    const cardsRef = useRef([]);
    const arrowsRef = useRef([]);
    const [faqOpen, setFaqOpen] = useState(null); // For managing FAQ state

    useEffect(() => {
        window.scrollTo(0, 0);
        const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

        // Animate cards
        cardsRef.current.forEach((card, index) => {
            tl.fromTo(
                card,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, delay: index * 0.2 }
            );
        });

        // Animate arrows
        arrowsRef.current.forEach((arrow, index) => {
            tl.fromTo(
                arrow,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, delay: index * 0.2 },
                "-=0.3" // Overlap slightly with the card animation
            );
        });
    }, []);

    const toggleFaq = (index) => {
        setFaqOpen((prev) => (prev === index ? null : index));
    };

    return (
        <div className="home-container">
            {/* Admissions Section */}
            <section className="admissions-section">
                <div className="admissions-header">
                    <h1>Admissions</h1>
                    <p>Follow the steps below to complete your offline admission process at Pentagon Career Institute.</p>
                </div>

                <div className="admissions-timeline">
                    <div className="step-container">
                        {/* Step 1 */}
                        <div
                            className="step-card"
                            ref={(el) => (cardsRef.current[0] = el)}
                        >
                            <h3>Step 1</h3>
                            <p>Visit our campus and collect the admission form.</p>
                        </div>
                        <div
                            className="arrow"
                            ref={(el) => (arrowsRef.current[0] = el)}
                        >
                            →
                        </div>

                        {/* Step 2 */}
                        <div
                            className="step-card"
                            ref={(el) => (cardsRef.current[1] = el)}
                        >
                            <h3>Step 2</h3>
                            <p>Fill out the form with accurate details.</p>
                        </div>
                        <div
                            className="arrow"
                            ref={(el) => (arrowsRef.current[1] = el)}
                        >
                            →
                        </div>

                        {/* Step 3 */}
                        <div
                            className="step-card"
                            ref={(el) => (cardsRef.current[2] = el)}
                        >
                            <h3>Step 3</h3>
                            <p>Submit your documents at the admissions office.</p>
                        </div>
                        <div
                            className="arrow"
                            ref={(el) => (arrowsRef.current[2] = el)}
                        >
                            →
                        </div>

                        {/* Step 4 */}
                        <div
                            className="step-card"
                            ref={(el) => (cardsRef.current[3] = el)}
                        >
                            <h3>Step 4</h3>
                            <p>Pay the fees to confirm your admission.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {[
                        {
                            question: "What documents are required for admission?",
                            answer: "You need to submit a valid ID proof, previous academic certificates, and passport-sized photographs.",
                        },
                        {
                            question: "Can I pay the admission fees online?",
                            answer: "Yes, you can pay the fees online through our secure payment portal.",
                        },
                        {
                            question: "What are the office timings?",
                            answer: "Our admissions office is open from 9:00 AM to 5:00 PM on weekdays.",
                        },
                    ].map((faq, index) => (
                        <div
                            className={`faq-item ${faqOpen === index ? "open" : ""}`}
                            key={index}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <span>{faqOpen === index ? "-" : "+"}</span>
                            </div>
                            {faqOpen === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <button className="cta-button">Connect Us</button>
            </section>
            <div className="bottom-space"></div>
        </div>
    );
};

export default Admissions;
