import ProductCatalogPage from "../pages/productCatalogPage";
import ProductCheckoutPage from "../pages/paymentCheckoutPage";
import ProductDetailPage from "../pages/productDetailPage";
import IntruksiBayar from "../components/intruksiBayar";
import PaymentInstruksiBayarPage from "../pages/paymentInstruksiBayarPage";

const routers = [
  {
    path: "/",
    element: <ProductCatalogPage />,
  },
  {
    path: "/checkout",
    element: <ProductCheckoutPage />,
  },
  {
    path: "/detail/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/instruksi-bayar",
    element: <PaymentInstruksiBayarPage />,
  },
];
export default routers;
