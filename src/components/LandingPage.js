import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <section>
                <h2>Contact Us</h2>
                <ContactForm />
            </section>
        </div>
    );
};

export default LandingPage;