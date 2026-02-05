import Welcome from "./components/welcome";
import Header from "./components/header";
// import ProfilCard from "./components/profilcard";
import Counter from "./components/Counter";
// import ToggleLike from "./components/toggleLike";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/homePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";

// komponen
// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Hello World</h1>
//       <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
//         <ProfilCard />
//         <ProfilCard />
//         <ProfilCard />
//         <ProfilCard />
//       </div>
//       <Welcome />
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------------------

// Proops
// untuk membuat komponen template yang bisa digunakan berulang kali dengan data yang berbeda
// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Hello World</h1>
//       <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
//         <ProfilCard
//           name="Irfan Aqila Utama"
//           role="Front-End Developer"
//           year={2002}
//         />
//         <ProfilCard
//           name="Ciaaaa"
//           // role="Back-End Developer"
//           year={1998}
//         />
//       </div>
//       <Welcome />
//     </div>
//   );
// }

// export default App;

// type Teacher = {
//   name: string;
//   job: string;
//   year: number;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     name: "Irfan Aqila Utama",
//     job: "Front-End Developer",
//     year: 2002,
//     id: 1,
//   },
//   {
//     name: "Ciaaaa",
//     job: "Back-End Developer",
//     year: 1998,
//     id: 2,
//   },
//   {
//     name: "Dani",
//     job: "Full-Stack Developer",
//     year: 1995,
//     id: 3,
//   },
// ];

// function App() {
//   return (
//     <div style={{ padding: "50px" }}>
//       <Header />
//       {/* <h1>Hello World</h1> */}
//       {/* <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
//         {teachers.map((teacher) => {
//           return (
//             <ProfilCard
//               name={teacher.name}
//               role={teacher.job}
//               year={teacher.year}
//               key={teacher.id}
//             />
//           );
//         })}
//       </div> */}
//       <Counter />
//       {/* <ToggleLike /> */}
//       <Welcome />
//     </div>
//   );
// }
// export default App;

// Belajar Router
function App() {
  return (
    <>
      {/* satu Routes akan membungkus banyak Route */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route menerima beberapa props salah satunya path dan menerima props bernama element dan didalamnya memberikan komponen, 
      komponen yang mau menjadi patch ketika url atau patch mengarah ke /terms */}
        <Route path="/terms" element={<TermsPage />} />

        {/* Dynamic Route */}
        {/* contoh Slug => Kaos Putih = kaos-putih */}
        {/* Slug hanya variabel saja atau placeholder saja */}
        <Route path="/product/:slug" element={<ProductPage />} />

        {/* path bintang * sama seperti else. jika path homepage dan terms tidak ke hit, makan akan masuk ke notfound page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
