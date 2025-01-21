import React, { useEffect } from "react";
const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="home-container">

            <section className="about-us">
                {/* Introduction Section */}
                <div className="intro">
                    <h1>Welcome to Pentagon Career Institute</h1>
                    <p>
                        Pentagon Career Institute is a premier coaching center dedicated to helping
                        students excel in MHT-CET, IIT-JEE, and NEET. With a proven track record
                        and expert guidance, we turn dreams into reality.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="section mission">
                    <h2>Our Mission</h2>
                    <p>
                        To empower students with the knowledge, confidence, and skills they need
                        to achieve excellence in competitive exams. We are committed to creating
                        a supportive and success-driven learning environment.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="section why-choose">
                    <h2>Why Choose Pentagon?</h2>
                    <ul>
                        <li>Expert faculty with years of experience.</li>
                        <li>Comprehensive study materials tailored to each exam.</li>
                        <li>Modern teaching techniques and digital tools.</li>
                        <li>Personalized doubt-clearing sessions.</li>
                        <li>Proven track record of success in MHT-CET, IIT-JEE, and NEET.</li>
                    </ul>
                </div>

                {/* Infrastructure and Resources Section */}
                <div className="section infrastructure">
                    <h2>State-of-the-Art Infrastructure</h2>
                    <p>
                        Our institute is equipped with modern classrooms, a digital library,
                        online mock test platforms, and all the resources necessary for a
                        world-class learning experience.
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="section call-to-action">
                    <h2>Join Us Today!</h2>
                    <p>
                        Take the first step toward your success in engineering and medicine by
                        joining Pentagon Career Institute. Let’s achieve excellence together!
                    </p>
                    <button className="cta-button">Enroll Now</button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;