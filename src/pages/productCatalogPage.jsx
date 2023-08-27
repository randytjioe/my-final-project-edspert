import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Product from "../components/product";
import ProductDetail from "../components/productDetail";

export default function ProductCatalogPage() {
  const data = [
    {
      id: 1,
      nama_program: "Programming Laravel",
      ket_program: "Getting Started with Laravel 9",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
    },
    {
      id: 2,
      nama_program: "Programming Laravel",
      ket_program: "Getting Started with Laravel 9",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
    },
    {
      id: 3,
      nama_program: "Programming Laravel",
      ket_program: "Getting Started with Laravel 9",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
    },
    {
      id: 4,
      nama_program: "Programming Laravel",
      ket_program: "Getting Started with Laravel 9",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
    },
    {
      id: 5,
      nama_program: "Programming Laravel",
      ket_program: "Getting Started with Laravel 9",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Product data={data} />
      <Footer />
    </>
  );
}
