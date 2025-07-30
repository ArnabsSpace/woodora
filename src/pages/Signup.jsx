import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

  const prefillEmail = location.state?.prefillEmail || "";
  const prefillPassword = location.state?.prefillPassword || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState(prefillEmail);
  const [password, setPassword] = useState(prefillPassword);

  const handleSignup = () => {
    // Save user data to localStorage
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to login page with prefilled values
    navigate("/login", {
      state: { prefillEmail: email, prefillPassword: password },
    });
  };

  return (
    <div className="min-h-fit mt-24 mb-8 flex items-center justify-center bg-white px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-90 transition-all"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
