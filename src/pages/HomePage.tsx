import { Link } from "react-router";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>halo ini Home Page</h1>
//       <p>klink link ini</p>
//       <a href="/terms">menuju halaman terms</a>
//     </div>
//   );
// };
// export default HomePage;

// Client Side Rendering
const HomePage = () => {
  return (
    <div>
      <h1>halo ini Home Page</h1>
      <p>klink link ini</p>
      {/* Link tidak melakukan request ke server hanya ganti di browser */}
      <Link to="/terms">menuju halaman terms dengan Link</Link>
    </div>
  );
};
export default HomePage;
