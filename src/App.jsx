import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <Header />
      <main className="font-montserrat select-none">
        <ScrollToTop />
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;