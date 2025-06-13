import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 lg:px-20 flex flex-col min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {/* ONLINE SHOPPING */}
        <div>
          <h3 className="font-bold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-2">
            {['Men', 'Women', 'Kids', 'Home', 'Beauty', 'Genz', 'Gift Cards', 'Myntra Insider'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="font-bold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2">
            {['Blog', 'Careers', 'Site Map', 'Corporate Information', 'Whitehat', 'Cleartrip'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
                
              </li>
            ))}
          </ul>
        </div>

        {/* CUSTOMER POLICIES */}
        <div>
          <h3 className="font-bold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-2">
            {['Contact Us', 'FAQ', 'T&C', 'Terms Of Use', 'Track Orders', 'Shipping', 'Cancellation', 'Returns', 'Privacy policy', 'Grievance Redressal'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* EXPERIENCE + SOCIAL */}
<div>
          <h3 className="font-bold mb-3">KEEP IN TOUCH</h3>
           <div className="flex items-center gap-4 text-gray-700">
      <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
        <FaFacebookF className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
        <FaTwitter className="h-6 w-6" />
      </a>
      <a href="#" aria-label="YouTube" className="hover:text-red-600 transition">
        <FaYoutube className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
        <FaInstagram className="h-6 w-6" />
      </a>
    </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="mt-10 border-t pt-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
            <p><strong>Return within 14 days</strong> of receiving your order</p>
          </div>
          
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 text-sm text-gray-500">
        <p><strong>Registered Office Address:</strong></p>
        <p>Buildings Alyssa, Begonia and Clover situated in Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli,</p>
        <p>Bengaluru – 560103, India</p>
        <p>CIN: U72300KA2007PTC041799</p>
        <p>Telephone: +91-80-61561999</p>
      </div>
      <br />
     <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 text-center">
  <p>In case of any concern, <a href="#S" className="text-blue-600 underline">Contact Us</a></p>
  <span>|</span>
  <p>© 2025 www.myntra.com. All rights reserved.</p>
  <span>|</span>
  <p>A Flipkart company</p>
</div>
    </footer>
  );
};

export default Footer;
