import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Faculty = () => {
    const facultyData = [
        {
            name: 'Dr. John Doe',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsS7RsigQ-2yyDRtYnh7xycdwCco-eBo1PQ&s',
            education: 'PhD in Computer Science, MSc in Data Science',
            experience: [
                '10+ years of teaching experience in AI and Data Science.',
            ],
            videoLink: 'https://www.youtube.com/embed/5i4U8pqKmOE?si=Rel7fkCBbBQjaT4r',
            message: 'I am passionate about teaching and empowering students with the skills needed to succeed in the rapidly evolving world of technology.',
            socialLinks: [
                { url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
                { url: 'https://twitter.com', icon: 'fab fa-twitter' },
                { url: 'https://github.com', icon: 'fab fa-github' },
            ],
        },
        {
            name: 'Dr. Jane Smith',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsS7RsigQ-2yyDRtYnh7xycdwCco-eBo1PQ&s',
            education: 'PhD in Computer Science, MSc in Data Science',
            experience: [
                '8+ years of experience in teaching AI and Machine Learning.',
            ],
            videoLink: 'https://www.youtube.com/embed/_PPfePt-V4A?si=QyNp2h6OXTWShWbI',
            message: 'I aim to inspire my students to think critically and apply their knowledge to real-world challenges.',
            socialLinks: [
                { url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
                { url: 'https://twitter.com', icon: 'fab fa-twitter' },
                { url: 'https://github.com', icon: 'fab fa-github' },
            ],
        },
        {
            name: 'Dr. John Doe',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsS7RsigQ-2yyDRtYnh7xycdwCco-eBo1PQ&s',
            education: 'PhD in Computer Science, MSc in Data Science',
            experience: [
                '10+ years of teaching experience in AI and Data Science.',
            ],
            videoLink: 'https://www.youtube.com/embed/wa5u89LmYBY?si=WfW1xM8X4zJWrocn',
            message: 'I am passionate about teaching and empowering students with the skills needed to succeed in the rapidly evolving world of technology.',
            socialLinks: [
                { url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
                { url: 'https://twitter.com', icon: 'fab fa-twitter' },
                { url: 'https://github.com', icon: 'fab fa-github' },
            ],
        },
        {
            name: 'Dr. Jane Smith',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsS7RsigQ-2yyDRtYnh7xycdwCco-eBo1PQ&s',
            education: 'PhD in Computer Science, MSc in Data Science',
            experience: [
                '8+ years of experience in teaching AI and Machine Learning.',
            ],
            videoLink: 'https://www.youtube.com/embed/1DD_C-k5dWo?si=ZFoO2ZKvuOJX2Yce',
            message: 'I aim to inspire my students to think critically and apply their knowledge to real-world challenges.',
            socialLinks: [
                { url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
                { url: 'https://twitter.com', icon: 'fab fa-twitter' },
                { url: 'https://github.com', icon: 'fab fa-github' },
            ],
        },
    ];

    // GSAP animations for the component
    // React.useEffect(() => {
    //     gsap.from('.faculty-page-card', {
    //         opacity: 1,
    //         y: 50,
    //         stagger: 0.2,
    //         duration: 1,
    //         ease: 'ease-out',
    //     });
    // }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="home-container">

            <div className="faculty-page-container">
                <div className="faculty-page-container">
                    {facultyData.map((faculty, index) => (
                        <div className="faculty-page-card faculty-card" key={index}>
                            <div className="faculty-page-header">
                                <div className="faculty-page-profile">
                                    <img
                                        src={faculty.profilePic}
                                        alt={`${faculty.name} Profile`}
                                        className="faculty-page-img"
                                    />
                                </div>
                                <h2 className="faculty-page-name">{faculty.name}</h2>
                                <p className="faculty-page-education">{faculty.education}</p>
                            </div>
                            <div className="faculty-page-info">
                                <div className="faculty-page-experience">
                                    <h4>Experience:</h4>
                                    <ul>
                                        {faculty.experience.map((exp, idx) => (
                                            <li key={idx}>{exp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="faculty-page-video">
                                <h4>Watch Demo</h4>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={faculty.videoLink}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Faculty Demo"
                                ></iframe>
                            </div>
                            <div className="faculty-page-message">
                                <h4>Message by Faculty:</h4>
                                <p>{faculty.message}</p>
                            </div>
                            <div className="faculty-page-social">
                                <h4>Follow:</h4>
                                <div className="social-page-links">
                                    {faculty.socialLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-page-icon"
                                        >
                                            <i className={link.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom-space"></div>
        </div>
    );
};

export default Faculty;
