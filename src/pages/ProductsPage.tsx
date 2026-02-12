import { Link } from "react-router";

const ProductsPage = () => {
  const product = [
    { id: 1, name: "Kaos Putih", price: 50000 },
    { id: 2, name: "Kemeja Biru", price: 150000 },
    { id: 3, name: "Celana Panjang", price: 200000 },
  ];
  return (
    <div>
      <h1>ini halaman detail product</h1>

      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {/* ini path nya {product.name} akan memunculkan sesuai namanya */}
            <Link to={`/product/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
