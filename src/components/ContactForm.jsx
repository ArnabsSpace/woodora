import React, { useState } from "react";
import contactRight from "../assets/images/contactRight.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setSubmittedData(formData);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", comment: "" });
  };

  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        
        <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg overflow-hidden">
          {/* Left Form */}
          
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="formInputWrapper w-full mb-4">
                <label htmlFor="firstName" className="text-left w-full font-semibold mb-2 inline-block">First Name</label>
                <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="p-2  bg-primary-10 px-6 outline-none w-full h-12 rounded-full"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              </div>
              <div className="formInputWrapper w-full mb-4">
                <label htmlFor="lastName" className="text-left w-full font-semibold mb-2 inline-block">Last name</label>
                <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="p-2  bg-primary-10 px-6 outline-none w-full h-12 rounded-full"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              </div>
              
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="formInputWrapper w-full">
                <label htmlFor="" className="text-left w-full font-semibold mb-2 inline-block">Email</label>
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2  bg-primary-10 px-6 outline-none w-full h-12 rounded-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              </div>
              <div className="formInputWrapper w-full">
                <label htmlFor="" className="text-left w-full font-semibold mb-2 inline-block">Phone No</label>
                <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                className="p-2  bg-primary-10 px-6 outline-none w-full h-12 rounded-full"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              </div>
              
              
            </div>
            <div className="formInputWrapper w-full my-4">
                <label htmlFor="comment" className="text-left w-full font-semibold mb-2 inline-block">Comment</label>
                <textarea
              name="comment"
              placeholder="Your Message"
              className="p-2 rounded bg-gray-100 outline-none w-full h-40"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
            </div>
            

            <div className="text-center max-w-full flex items-end justify-end">
              <button
                type="submit"
                className="px-6 min-w-[200px] h-12 mt-4 py-2 rounded-full bg-primary text-white hover:bg-primary-90"
              >
                Send
              </button>
            </div>

            {submittedData && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
                Thank you {submittedData.firstName}, your message has been submitted!
              </div>
            )}
          </form>

          {/* Right Image & Promo Box */}
          <div className="flex items-center justify-center">
            <div className="text-left relative w-full">
              <img src={contactRight} alt="Contact Promo" className="w-full max-h-full" />
              <div className="absolute bottom-8 left-12">
                <span className="inline-block bg-pink-600 text-white text-xl font-bold px-2 py-1 rounded mb-2">HOT</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary md:leading-snug">
                  DISCOUNT <br /> 25% FOR <br /> NEW MEMBER
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
