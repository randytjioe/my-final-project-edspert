import Footer from "../components/footer";
import HeroProductDetail from "../components/heroProductDetail";
import Navbar from "../components/navbar";
import ProductDetail from "../components/productDetail";

export default function ProductDetailPage() {
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
      detail: {
        nama_mentor_1: "William Hartono",
        posisi_mentor_1: "Developer at Widya Edu",
        nama_mentor_2: "Farel Prayoga",
        posisi_mentor_2: "Developer at Widya Edu",
        silabus: [
          {
            nama: "Pengenalan Programming Laravel",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 2",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 3",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
        ],
      },
    },
    {
      id: 2,
      nama_program: "Programming ReactJS",
      ket_program: "Getting Started with ReactJS",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
      detail: {
        nama_mentor_1: "William Hartono",
        posisi_mentor_1: "Developer at Widya Edu",
        nama_mentor_2: "Farel Prayoga",
        posisi_mentor_2: "Developer at Widya Edu",
        silabus: [
          {
            nama: "Pengenalan Programming Laravel",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 2",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 3",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
        ],
      },
    },
    {
      id: 3,
      nama_program: "Programming Python",
      ket_program: "Getting Started with Python",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
      detail: {
        nama_mentor_1: "William Hartono",
        posisi_mentor_1: "Developer at Widya Edu",
        nama_mentor_2: "Farel Prayoga",
        posisi_mentor_2: "Developer at Widya Edu",
        silabus: [
          {
            nama: "Pengenalan Programming Laravel",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 2",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 3",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
        ],
      },
    },
    {
      id: 4,
      nama_program: "Programming Excel",
      ket_program: "Getting Started with Excel",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
      detail: {
        nama_mentor_1: "William Hartono",
        posisi_mentor_1: "Developer at Widya Edu",
        nama_mentor_2: "Farel Prayoga",
        posisi_mentor_2: "Developer at Widya Edu",
        silabus: [
          {
            nama: "Pengenalan Programming Laravel",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 2",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 3",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
        ],
      },
    },
    {
      id: 5,
      nama_program: "Programming Flutter",
      ket_program: "Getting Started with Flutter",
      jenis: "Intensive Bootcamp",
      batch: "September 2023",
      mentor: "William Hartono, Farel Prayoga",
      harga_awal: "Rp 2060.000",
      harga_promo: "Rp 560.000",
      detail: {
        nama_mentor_1: "William Hartono",
        posisi_mentor_1: "Developer at Widya Edu",
        nama_mentor_2: "Farel Prayoga",
        posisi_mentor_2: "Developer at Widya Edu",
        silabus: [
          {
            nama: "Pengenalan Programming Laravel",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 2",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
          {
            nama: "Materi Bootcamp Laravel 3",
            detail:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
          },
        ],
      },
    },
  ];
  return (
    <>
      <Navbar />
      <HeroProductDetail data={data} />
      <ProductDetail data={data} />
      <Footer />
    </>
  );
}
