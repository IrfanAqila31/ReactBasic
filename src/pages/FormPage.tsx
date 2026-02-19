import { useRef } from "react";




// useState untuk data yang berubah-ubah dan mempengaruhi tampilan, useRef untuk data yang tidak mempengaruhi tampilan dan tidak berubah-ubah
const FormPage = () => {
  // uncontrolled component/input yang tidak terkontrol oleh react, kita bisa menggunakan ref untuk mengambil nilai input
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const fullNameHandleValue = inputRef.current?.value;
    const emailHandleValue = inputEmailRef.current?.value;

    // logic untuk submit form
    alert("Form submitted: " + fullNameHandleValue + " - " + emailHandleValue );
  };
  return (
    <div>
      <h1>ini FromPage</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* id sama htmlForm sebisa mungkin sama karena mentrigger form melalui label */}
        <label htmlFor="full-name">Full Name</label>
        <input ref={inputRef} id="full-name" type="text" />
        <label htmlFor="email">Email</label>
        <input ref={inputEmailRef} id="email" type="email" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default FormPage;
