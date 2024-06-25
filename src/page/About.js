// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section id="about" className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">About Us</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Thirumurugan Stores</h2>
            <p className="text-lg text-gray-800 mb-4">
              Thirumurugan Stores is a renowned dealer offering a wide range of food products, gifts, and stationery items. With a commitment to quality and customer satisfaction, we have been serving our valued customers for over a decade.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our extensive product range includes fresh produce, snacks, beverages, stationery, and more, catering to the diverse needs of our customers.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              We pride ourselves on delivering exceptional customer service and ensuring a seamless shopping experience for every customer who walks through our doors.
            </p>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-lg text-gray-800 mb-2"><span className="font-bold">Address:</span> Unagalpatti, Moharnur, Namakkal - 637015</p>
              <p className="text-lg text-gray-800 mb-2"><span className="font-bold">Phone:</span> 9943617678, 6374515007</p>
              <p className="text-lg text-gray-800"><span className="font-bold">Email:</span> thirumuruganstores@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
