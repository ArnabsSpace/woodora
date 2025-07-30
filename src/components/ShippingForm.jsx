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
    <div className="w-full max-w-full flex flex-wrap gap-4 items-center justify-center">
      {shippingFields.map(({ name, label, type }) => (
        <div key={name} className={`w-full ${name === "address" ? "md:w-full" : "md:w-1/2"}`}>
          <input
            name={name}
            type={type}
            placeholder={label}
            className={`w-full border p-2 rounded ${errors[name] ? "border-red-500" : ""}`}
            value={formData[name]}
            onChange={handleChange}
          />
          {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
        </div>
      ))}

      <button
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary-90"
        onClick={handleContinue}
      >
        Continue to Payment
      </button>
    </div>
  );
}
