import { useParams } from "react-router";
import { Link } from "react-router";
// import ProductsPage from "./ProductsPage";

const ProductPage = () => {
  const params = useParams<{ slug: string }>();
  return (
    <div>
      <h1>Produk Page</h1>
      <Link to="/product/:id">klik ini ke detail product</Link>
      <p>{params.slug}</p>
    </div>
  );
};
export default ProductPage;
