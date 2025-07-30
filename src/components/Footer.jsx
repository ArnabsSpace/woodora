import mailIcon from '../assets/icons/mail.svg';
import footerSofa from '../assets/images/footersofa.png';
import paperPlan from '../assets/icons/paperplan.svg';
import logo from "../assets/icons/woodora-logo-dark.svg";
import faceBook from '../assets/icons/facebook.svg';
import twiTer from '../assets/icons/twitter.svg';
import linkedIn from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white pt-0 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Newsletter and Image */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-10">
          {/* Newsletter */}
          <div className="w-full md:w-1/2 pb-10">
            <label className="block mb-2 font-semibold text-gray-700">
              <span className="inline-flex items-center gap-2">
                <img src={mailIcon} alt="email" className="w-5 h-5" />
                Subscribe to Newsletter
              </span>
            </label>
            <div className="flex">
              <input
                type="email"
                placeholder="janadoe@example.com"
                className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
              />
              <button className="bg-[#2C265C] text-white px-4 py-2 rounded-r-full">
                <img src={paperPlan} alt="send" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chair image */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <img
              src={footerSofa}
              alt="chair"
              className="mx-auto md:ml-auto md:mr-0 max-w-full"
            />
          </div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center">
          {/* Branding */}
          <div className="w-full md:w-1/3">
            <img src={logo} alt="logo" className="w-64 mb-16" />
            <p className="text-gray-600 text-sm mb-4">
              Designing modern digital experiences that inspire. <br />
              Follow us for updates and design insights.
            </p>
            <div className="flex space-x-4 mt-16">
              <a href="/" className='w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg'><img src={faceBook} alt="Facebook" className="w-4 h-4" /></a>
              <a href="/" className='w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg'><img src={instagram} alt="Instagram" className="w-4 h-4" /></a>
              <a href="/" className='w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg'><img src={twiTer} alt="Twitter" className="w-4 h-4" /></a>
              <a href="/" className='w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg'><img src={linkedIn} alt="LinkedIn" className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 w-full sm:w-3/4">
            <div >
              <ul className="space-y-2">
                <li>Home</li>
                <li>About us</li>
                <li>Shop</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Sofa</li>
                <li>Bed</li>
                <li>Chair</li>
                <li>Table</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Office Table</li>
                <li>Office Chair</li>
                <li>Office Sofa</li>
                <li>Office Lamp</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Return Policy</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Track Order</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 pb-10">
          <span>Copyright 2025. All Rights Reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
