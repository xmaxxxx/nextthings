import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className="container text-white mx-auto p-6">
                <h1 className="text-4xl font-semibold text-center  mb-6">Contact Us</h1>
                <ContactCard />

                <section className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold ">
                        We'd love to hear <span className="text-blue-600">from you</span>
                    </h2>

                    <ContactForm   />
                </section>
            </div>
        </>
    );
};

export default Contact;
