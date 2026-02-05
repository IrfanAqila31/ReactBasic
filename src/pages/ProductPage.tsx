import { useParams } from "react-router";
const ProductPage = () => {
  const params = useParams<{slug : string}>();
  return (
    <div>
      <h1>Produk Page</h1>
      <p>{params.slug}</p>
    </div>
  );
};
export default ProductPage;
