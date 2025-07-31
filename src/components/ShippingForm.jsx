import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shippingFields from "../data/shippingFields";

export default function ShippingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("shippingInfo");
    return saved ? JSON.parse(saved) : Object.fromEntries(shippingFields.map(f => [f.name, ""]));
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    shippingFields.forEach(({ name, label }) => {
      const value = formData[name]?.trim();

      if (!value) {
        newErrors[name] = `${label} is required.`;
      } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[name] = "Enter a valid email address.";
      } else if (name === "zip" && isNaN(value)) {
        newErrors[name] = "ZIP Code must be numeric.";
      } else if (name === "phone" && value.length < 7) {
        newErrors[name] = "Phone number is too short.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      localStorage.setItem("shippingInfo", JSON.stringify(formData));
      navigate("/checkout");
    }
  };

  return (
    <div className="w-full p-4">
      <h1 className="font-bold text-2xl mb-4 text-primary">Shipping Information</h1>
      <div className="w-full max-w-full flex flex-wrap gap-0 items-center justify-center">
        
        {shippingFields.map(({ name, label, type }) => (
          <div key={name} className={`w-full flex flex-col p-2 ${name === "address" ? "md:w-full" : "md:w-1/2"}`}>
            <label htmlFor={name} className="font-medium text-base mb-2">{label}</label>
            <input
              name={name}
              type={type}
              placeholder={label}
              className={`w-full border p-2 px-4 h-12 bg-primary-10 rounded-full ${errors[name] ? "border-red-500" : ""}`}
              value={formData[name]}
              onChange={handleChange}
            />
            {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
          </div>
        ))}

        <div className="flex w-full justify-end">
          <button
            className="w-full bg-primary text-white py-2 rounded-full h-12 hover:bg-primary-90 md:max-w-[250px] mt-8 max-w[200px] ml-auto mr-0"
            onClick={handleContinue}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
