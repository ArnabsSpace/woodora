import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import users from "../data/users";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Prefill values from navigation state
  const prefillEmail = location.state?.prefillEmail || "demo@woodora.com";
  const prefillPassword = location.state?.prefillPassword || "woodora123";

  const [email, setEmail] = useState(prefillEmail);
  const [password, setPassword] = useState(prefillPassword);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // 1. Check hardcoded users
    const hardcodedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    // 2. Check localStorage user (created via signup)
    const localUser = JSON.parse(localStorage.getItem("user"));
    const isLocalUserValid =
      localUser &&
      localUser.email === email &&
      localUser.password === password;

    // if (hardcodedUser) {
    //   dispatch(login(hardcodedUser));
    //   navigate("/shipping");
    // } else if (isLocalUserValid) {
    //   dispatch(login(localUser));
    //   navigate("/shipping");
    // } else {
    //   setError("Invalid credentials.");
    // }

    if (hardcodedUser) {
      localStorage.setItem("user", JSON.stringify(hardcodedUser)); // store user
      dispatch(login(hardcodedUser));

      // ✅ Trigger update for Header
      window.dispatchEvent(new Event("user-login-status-changed"));

      navigate("/shipping");
    } else if (isLocalUserValid) {
      localStorage.setItem("user", JSON.stringify(localUser)); // store user
      dispatch(login(localUser));

      // ✅ Trigger update for Header
      window.dispatchEvent(new Event("user-login-status-changed"));

      navigate("/shipping");
    }

  };

  const goToSignup = () => {
    navigate("/signup", {
      state: { prefillEmail: email, prefillPassword: password },
    });
  };

  return (
    <div className="min-h-fit mt-24 mb-8 flex items-center justify-center bg-white px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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
          onClick={handleLogin}
        >
          Log In
        </button>
        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <button className="text-blue-600 underline" onClick={goToSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
