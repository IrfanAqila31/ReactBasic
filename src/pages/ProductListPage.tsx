import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const handleSortValueChange = (sortValue: string) => {
    // ganti search params 'sort' dengan value 'price_asc'
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };
  const handleName = (nameValue: string) => {
    // ganti search params 'sort' dengan value 'price_asc'
    searchParams.set("name", nameValue);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>sort : {searchParams.get("sort")}</li>
        <li>name : {searchParams.get("name")}</li>
      </ul>

      <div style={{ display: "flex", gap: "10px" }}>
        {/* memanggil function menggunakan parameter */}
        <button onClick={() => handleSortValueChange("price-desc")}>
          price desc
        </button>
        <button onClick={() => handleSortValueChange("price-asc")}>
          price asc
        </button>
        <button onClick={() => handleSortValueChange("popular")}>
          Sort Most Popular
        </button>
        <button onClick={() => handleName("kaos")}>kaos</button>
        <button onClick={() => handleName("kemeja")}>kemeja</button>
        <button onClick={() => handleName("celana-panjang")}>celana panjang</button>
      </div>
    </div>
  );
};
export default ProductListPage;
