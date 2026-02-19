// import { useParams, Link } from "react-router";

// const DetailProductPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const products = [
//     { id: 1, name: "Kaos Putih", price: 50000 },
//     { id: 2, name: "Kemeja Biru", price: 150000 },
//     { id: 3, name: "Celana Panjang", price: 200000 },
//   ];
//   // mencari product yang sesuai dengan id dari params
//   const product = products.find((item) => item.id === Number(id));

//   if (!product) {
//     return <h2>Produk tidak ditemukan 😢</h2>;
//   }
//   return (
//     <div>
//       <h1>Detail Produk</h1>

//       <h2>{product.name}</h2>
//       <p>Harga: Rp {product.price}</p>

//       <Link to="/products">⬅ Kembali ke daftar produk</Link>
//     </div>
//   );
// };

// export default DetailProductPage;
