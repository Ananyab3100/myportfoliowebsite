import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to server or email)
    console.log('Form Data:', formData);
    setFormStatus('Thank you for reaching out! I will get back to you soon.');

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center font-playpen p-4 border-black border-4">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="my-2 border-black border-2 p-4">
        <h3 className="text-2xl font-bold mb-4 text-center">Get in Touch!</h3>
        <ul className="space-y-2 text-center">
          <li>
            <span className="font-semibold">Phone: </span>
            <a href="tel:+918411809671" className="text-blue-600 hover:underline">
              +91 8411809671
            </a>
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            <a href="mailto:ananyabhagat3100@gmail.com" className="text-blue-600 hover:underline">
            ananyabhagat3100@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/ananya-bhagat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MyLinkedIn Profile
            </a>
          </li>
          <li>
            <span className="font-semibold">Twitter: </span>
            <a
              href="https://x.com/AnanyaB3100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @MyTwitterHandle
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
