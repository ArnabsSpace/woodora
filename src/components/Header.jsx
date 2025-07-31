import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/icons/woodora-logo-dark.svg";
import wishIcon from "../assets/icons/wish.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";
import menuHB from "../assets/icons/menuHB.svg";
import TopBar from "./TopBar";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const wishCount = useSelector((state) => state.wishlist.wishlistItems.length);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsLoggedIn(!!localStorage.getItem("user"));
  //   };
  //   window.addEventListener("storage", handleStorageChange);
  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  useEffect(() => {
    const updateLoginState = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };

    window.addEventListener("storage", updateLoginState);       // for other tabs
    window.addEventListener("user-login-status-changed", updateLoginState); // for current tab

    return () => {
      window.removeEventListener("storage", updateLoginState);
      window.removeEventListener("user-login-status-changed", updateLoginState);
    };
  }, []);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-md font-montserrat">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src={logo} alt="Woodora Logo" className="w-32 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-black">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/products" className="hover:text-primary">Shop</Link>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-xl text-black relative">
            <Link to="/products" className="hover:text-primary">
              <img src={searchIcon} alt="search" className="w-6 h-6" />
            </Link>
            <Link to="/wishlist" className="hover:text-primary relative">
              <img src={wishIcon} alt="wish" className="w-6 h-6" />
              {wishCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="hover:text-primary relative">
              <img src={cartIcon} alt="cart" className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Dropdown */}
            <div className="relative w-6 h-6">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="hover:text-primary"
                  >
                    <img src={userIcon} alt="user" className="w-6 h-6" />
                  </button>
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
                      <Link to="/confirmation" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setUserDropdownOpen(false)}>
                        My Orders
                      </Link>
                      <LogoutButton onAfterLogout={() => setUserDropdownOpen(false)} />
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login" className="hover:text-primary">
                  <img src={userIcon} alt="user" className="w-6 h-6" />
                </Link>
              )}
            </div>

            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden hover:text-primary"
            >
              <img src={menuHB} alt="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">
              ✕
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4 gap-4 text-black text-base">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <hr className="my-2" />
            {isLoggedIn ? (
              <>
                <Link to="/orders" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
                <LogoutButton onAfterLogout={() => setMobileMenuOpen(false)} />
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            )}
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>Wishlist</Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          </nav>
        </div>

        {/* Background overlay when mobile menu open */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
}
