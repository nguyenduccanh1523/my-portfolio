import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 flex items-center">
        <div className="max-w-4xl mx-auto text-left px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-xs mt-2">Built with ❤️ using React</p>
        </div>
        <div className="max-w-4xl mx-auto text-right mt-4">
          <ul className="flex justify-end space-x-4">
            <li>
              <a
                href="https://www.facebook.com/nguyen.uc.canh.186227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-200 rounded-full hover:text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nguyenduccanh1523"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-200 rounded-full hover:text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/duccank19_0_o/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-200 rounded-full hover:text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/c%E1%BA%A3nh-nguy%E1%BB%85n-648a79268/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-200 rounded-full hover:text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
