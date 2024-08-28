import { useState } from "react";
import BlogSection from "./components/Blog/BlogSection";
import Category from "./components/Category/Category";
import Banner from "./components/Feature/Banner/Banner";
import FeatureSectionBreakfastCard from "./components/Feature/Feature/FeatureSectionBreakfastCard";
import FeatureSectionFruits from "./components/Feature/Feature/FeatureSectionFruits";
import Footer from "./components/Footer/Footer";
import UpFooter from "./components/Footer/UpFooter";
import Hero from "./components/Hero";
import MobileNavbar from "./components/Navbars/MobileNavbar";
import Navbar from "./components/Navbars/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart}/>
        <MobileNavbar setShowCart={setShowCart}/>
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakfastCard />
        <Banner />
        <BlogSection />
        <Newsletter />
        <UpFooter />
        <Footer />

        {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
      </main>
    </CartContextProvider>
  );
}

export default App;
