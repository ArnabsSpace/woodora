import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import ProductList from "../pages/ProductList";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Blog from "../pages/Blog";
// import BlogSingle from "../pages/BlogSingle";
// import Confirmation from "../pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
    //   { path: "products", element: <ProductList /> },
    //   { path: "product/:id", element: <ProductDetails /> },
    //   { path: "cart", element: <Cart /> },
    //   { path: "checkout", element: <Checkout /> },
    //   { path: "confirmation", element: <Confirmation /> },
    //   { path: "login", element: <Login /> },
    //   { path: "signup", element: <Signup /> },
    //   { path: "about", element: <About /> },
    //   { path: "contact", element: <Contact /> },
    //   { path: "blog", element: <Blog /> },
    //   { path: "blog/:id", element: <BlogSingle /> }
    ]
  }
]);

export default router;


