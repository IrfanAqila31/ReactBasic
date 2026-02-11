import { useParams } from "react-router";
// import { useParams } from "react-router";
const ProducDetail = () => {
  const params = useParams<{slug : string}>();
  return (
    <div>
      <h1>Produk Page</h1>
      <p>{params.slug}</p>
    </div>
  );
};
export default ProducDetail;




// const ProductDetail = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>📌 Product Detail</h1>
//       <p>You are viewing product with ID: <b>{id}</b></p>
//     </div>
//   );
// };

// export default ProductDetail;
