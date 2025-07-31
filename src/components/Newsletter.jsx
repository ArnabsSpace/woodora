import { useEffect, useState } from "react";
import mailIcon from "../assets/icons/mail.svg";
import paperPlan from "../assets/icons/paperplan.svg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const subscribed = localStorage.getItem("newsletterSubscribed");
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email cannot be empty.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("newsletterSubscribed", email);
    setIsSubscribed(true);
    setError(""); // clear error if valid
  };

  return (
    <div className="w-full md:w-1/2 pb-10">
      {!isSubscribed ? (
        <>
          <label className="block mb-2 font-semibold text-gray-700">
            <span className="inline-flex items-center gap-2">
              <img src={mailIcon} alt="email" className="w-5 h-5" />
              Subscribe to Newsletter
            </span>
          </label>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(""); // clear error on typing
              }}
              placeholder="janadoe@example.com"
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button
              className="bg-[#2C265C] text-white px-4 py-2 rounded-r-full"
              onClick={handleSubscribe}
            >
              <img src={paperPlan} alt="send" className="w-4 h-4" />
            </button>
          </div>
          {error && (
            <p className="mt-1 text-sm text-red-500">{error}</p>
          )}
        </>
      ) : (
        <div className="bg-primary-10 text-primary px-4 py-3 rounded-md">
          <p className="font-semibold">You're subscribed!</p>
          <p className="text-sm">Thank you for subscribing to our newsletter.</p>
        </div>
      )}
    </div>
  );
}
