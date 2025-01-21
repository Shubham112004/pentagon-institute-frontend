import React, { useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="home-container">

            <section className="contact-us">
                {/* Header Section */}
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>
                        We are here to assist you with any inquiries or concerns. Reach out to
                        Pentagon Career Institute and take the next step toward academic success!
                    </p>
                </div>

                {/* Contact Information Section */}
                <div className="section contact-info">
                    <h2>Our Contact Details</h2>
                    <ul>
                        <li>
                            <strong>Address:</strong> 123 Knowledge Avenue, Study City, SC 45678
                        </li>
                        <li>
                            <strong>Phone:</strong> +1 234 567 8900
                        </li>
                        <li>
                            <strong>Email:</strong> info@pentagoninstitute.com
                        </li>
                        <li>
                            <strong>Working Hours:</strong> Mon - Sat: 9 AM - 7 PM
                        </li>
                    </ul>
                </div>

                {/* Inquiry Form Section */}
                <div className="section contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;