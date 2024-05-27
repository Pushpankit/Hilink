import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="max-container flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 lg:mr-8">
          <h2 className="text-lg font-semibold">Footer Title</h2>
          <p className="mt-2 lg:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula, mauris eu tempus tempor, eros leo elementum est, nec accumsan neque turpis eget lectus.</p>
        </div>
        <div className="flex justify-between"> <div className="mb-4 lg:mb-0 lg:mr-8">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-2">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
