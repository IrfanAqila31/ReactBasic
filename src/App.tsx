import Welcome from "./components/welcome";
import Header from "./components/header";
// import ProfilCard from "./components/profilcard";
// import Counter from "./components/Counter";
import ToggleLike from "./components/toggleLike";

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
function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Header />
      {/* <h1>Hello World</h1> */}
      {/* <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
        {teachers.map((teacher) => {
          return (
            <ProfilCard
              name={teacher.name}
              role={teacher.job}
              year={teacher.year}
              key={teacher.id}
            />
          );
        })}
      </div> */}
      {/* <Counter /> */}
      <ToggleLike />
      <Welcome />
    </div>
  );
}

export default App;
