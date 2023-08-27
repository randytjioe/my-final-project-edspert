import Checkout from "../components/checkout";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ProductDetail from "../components/productDetail";

export default function ProductCheckoutPage() {
  return (
    <>
      <Navbar />

      <Checkout />
      <Footer />
    </>
  );
}
