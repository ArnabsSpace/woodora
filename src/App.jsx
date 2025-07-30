import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main className="font-montserrat">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;