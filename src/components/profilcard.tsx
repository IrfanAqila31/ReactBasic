// function  ProfilCard() {
//     const name = "Irfan Aqila Utama";
//     const year = 2002;
//     const role = "Front-End";

//     return(
//         <div className="card">
//             {/* harus menggunakan kurung kurawal kalau ingin menggunakan javascript expression */}
//             <p>Nama : {name}</p>
//             <p>Tahun Lahir : {year}</p>
//             <p>job : {role}</p>
//         </div>
//     )
// }
// export default ProfilCard;

// Proops
// untuk membuat komponen template yang bisa digunakan berulang kali dengan data yang berbeda

type ProfilCardProps = {
 name: string;
 year: number;
 role?: string;
}
function  ProfilCard(Props: ProfilCardProps ) {
    return(
        <div className="card">
            {/* harus menggunakan kurung kurawal kalau ingin menggunakan javascript expression */}
            <p>Nama : {Props.name}</p>
            <p >Tahun Lahir : {Props.year}</p>


            {/* ternary */}
            {Props.role ? <p>job : {Props.role}</p> : null}
        </div>
    )
}
export default ProfilCard;