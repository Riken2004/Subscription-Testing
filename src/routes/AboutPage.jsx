import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <h1>Welcome to the Deakin Developer Hub</h1>
            <p>
                This website is dedicated to developers at Deakin University. Here, you'll find a wealth of resources, tutorials, and tools designed to help you excel in your projects and coursework. Whether you're just starting out or you're an experienced coder, there's something here for everyone.
            </p>
            
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower Deakin developers by providing a collaborative platform where you can learn, share, and grow. We believe in fostering a community of innovation, creativity, and continuous learning.
                </p>
            </section>
            
            <section className="about-section">
                <h2>What We Offer</h2>
                <ul>
                    <li>Comprehensive tutorials on a wide range of programming languages and frameworks.</li>
                    <li>Access to project ideas and open-source initiatives.</li>
                    <li>Networking opportunities with fellow developers and industry professionals.</li>
                    <li>Regular workshops and hackathons to hone your skills.</li>
                </ul>
            </section>
            
            <section className="about-section">
                <h2>Join Our Community</h2>
                <p>
                    We invite you to become an active member of our community. Share your knowledge, ask questions, and collaborate on projects. Together, we can build a strong network of Deakin developers ready to tackle the challenges of tomorrow.
                </p>
                <a href="https://www.deakin.edu.au" className="about-link">Learn More About Deakin University</a>
            </section>
            
            <footer className="about-footer">
                <p>&copy; 2024 Deakin Developer Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutPage;
