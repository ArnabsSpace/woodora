import { Link } from "react-router-dom";

import mailIcon from '../assets/icons/mail.svg';
import footerSofa from '../assets/images/footersofa.png';
import paperPlan from '../assets/icons/paperplan.svg';
import logo from "../assets/icons/woodora-logo-dark.svg";
import faceBook from '../assets/icons/facebook.svg';
import twiTer from '../assets/icons/twitter.svg';
import linkedIn from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';
import Newsletter from './Newsletter';

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Home", to: "/" },
      { label: "About us", to: "/about" },
      { label: "Shop", to: "/products" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Sofa", to: "/products" },
      { label: "Bed", to: "/products" },
      { label: "Chair", to: "/products" },
      { label: "Table", to: "/products" },
    ],
  },
  {
    title: "Office",
    links: [
      { label: "Office Table", to: "/products" },
      { label: "Office Chair", to: "/products" },
      { label: "Office Sofa", to: "/products" },
      { label: "Office Lamp", to: "/products" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Return Policy", to: "/return-policy" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact Us", to: "/contact" },
      { label: "Track Order", to: "/cart" },
    ],
  },
];

const policyLinks = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-0 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Newsletter and Image */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-10">
          {/* Newsletter */}
        
          <Newsletter />

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
              <a href="/" className="w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg"><img src={faceBook} alt="Facebook" className="w-4 h-4" /></a>
              <a href="/" className="w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg"><img src={instagram} alt="Instagram" className="w-4 h-4" /></a>
              <a href="/" className="w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg"><img src={twiTer} alt="Twitter" className="w-4 h-4" /></a>
              <a href="/" className="w-10 h-10 rounded-full items-center justify-center bg-amberGold flex transition hover:shadow-lg"><img src={linkedIn} alt="LinkedIn" className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Dynamic Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 w-full sm:w-3/4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.to} className="hover:text-gray-900 transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 pb-10">
          <span>© 2025. All Rights Reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {policyLinks.map((link, index) => (
              <Link key={index} to={link.to} className="hover:text-gray-800 transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
