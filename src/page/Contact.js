// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section id="contact" className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Contact Us</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-800 mb-6">
              For any inquiries or assistance regarding our products or services, please feel free to contact us using the information provided below:
            </p>
            <div className="mt-6">
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

export default Contact;
