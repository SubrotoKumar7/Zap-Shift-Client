import React from 'react';

const About = () => {
    return (
        <div className='w-11/12 mx-auto py-20 px-27'>
            <div className='mb-13'>
                <h1 className='font-extrabold text-secondary text-4xl mb-2'>About Us</h1>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div>
                <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="Story" />
                <div className="tab-content border-base-300 bg-base-100 p-10 leading-8">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Mission" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10 leading-8">Our mission is simple yet powerful: to revolutionize parcel delivery by providing customers with fast, reliable, and transparent service. We are driven by technology, aiming to reduce delays, optimize routes, and offer real-time tracking to keep you updated at every step. Every delivery we make reflects our commitment to excellence, ensuring you never have to worry about your packages.</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Success" />
                <div className="tab-content border-base-300 bg-base-100 p-10 leading-8">From humble beginnings to a leader in the courier industry, our success is defined by the trust our customers place in us. We've successfully completed millions of deliveries, connecting businesses, people, and cities with speed and precision. Our innovative approach and customer-first mindset have earned us accolades and set new standards for the industry.</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Teams & Others" />
                <div className="tab-content border-base-300 bg-base-100 p-10 leading-8">Our team is the backbone of our success. With diverse expertise spanning logistics, technology, customer service, and operations, we work relentlessly to ensure every parcel is delivered on time and in perfect condition. Our dedicated professionals are committed to providing an exceptional experience to every customer, every time</div>
                </div>
            </div>
        </div>
    );
};

export default About;