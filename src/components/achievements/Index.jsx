import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Achievements = () => {
    const imageUrls = [
        'https://media1.thehungryjpeg.com/thumbs2/ori_3868174_1m1bgeptgbsf5x6zkwut1fcvwlkvu7mm631ij7d6_feminine-podcaster-instagram-carousel-keynote-template.png',
        'https://media1.thehungryjpeg.com/thumbs2/ori_3868386_8rsvpp698ne9rzs1jn64lssdzoejryb7w3rz0y2u_traveling-agency-instagram-carousel-keynote-template.png',
        'https://media1.thehungryjpeg.com/thumbs2/ori_3868394_w4g6at3kj9nmv0sfx929k5enumvy5nh1ljc52clx_traveling-tips-camping-instagram-carousel-keynote-template.png',
        'https://media1.thehungryjpeg.com/thumbs2/ori_3868399_j3v6znt122iw4dp4yxse5pn8nb4nz6zm9ev1jwdi_professional-resume-online-instagram-carousel-keynote-template.png',
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        // GSAP animation for rotating and scaling images
        gsap.utils.toArray('.achievement-image').forEach((image, index) => {
            const randomRotation = gsap.utils.random(-15, 15); // Slight rotation for effect

            gsap.fromTo(
                image,
                {
                    rotation: randomRotation,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    rotation: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    delay: index * 0.3, // Stagger the animation slightly
                    ease: 'back.out(1.7)', // Smooth easing effect
                }
            );
        });
    }, []);

    return (
        <div className="home-container">
            <div className="achievements-section">
                <h2>Our Achievements</h2>
                <div className="images-container">
                    {imageUrls.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Achievement ${index}`}
                            className="achievement-image"
                        />
                    ))}
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur, ipsa aperiam ab aspernatur rerum sed blanditiis, corporis dolores aliquam sint, asperiores provident. Architecto illum fugiat nostrum qui blanditiis sequi dolorem saepe esse amet provident, ad natus vel perspiciatis facere.</p>
            </div>
        </div>
    );
};

export default Achievements;
