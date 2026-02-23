import { useRef, useState } from "react";

// useState untuk data yang berubah-ubah dan mempengaruhi tampilan, useRef untuk data yang tidak mempengaruhi tampilan dan tidak berubah-ubah
const FormPage = () => {
  // uncontrolled component/input yang tidak terkontrol oleh react, kita bisa menggunakan ref untuk mengambil nilai input
  // value nya didapatkan di akhir saat submit
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  // Controllded component/input
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const handleSubmit = () => {
    // const fullNameHandleValue = inputRef.current?.value;
    // const emailHandleValue = inputEmailRef.current?.value;

    // // logic untuk submit form
    // alert("Form submitted: " + fullNameHandleValue + " - " + emailHandleValue);
    // --------------------------------------------------------------------------------
    // logic untuk validasi form
    const fullNameValidation = fullNameInput.length < 3;
    const passwordValidation = passwordInput.length < 8;
    if (fullNameValidation) {
      setFullNameErrorMessage("Full Name harus lebih dari 3 karakter");
    }
    if (passwordValidation) {
      setPasswordErrorMessage("Password harus lebih dari 8 karakter");
    }
  };
  return (
    <div>
      <h1>ini FromPage</h1>
      <h2>Full Name: {fullNameInput}</h2>
      <h2>Email: {emailInput}</h2>
      <h2>Password: {passwordInput}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* id sama htmlForm sebisa mungkin sama karena mentrigger form melalui label */}
        <label htmlFor="full-name">Full Name</label>
        {/* event = kejadian yang sedang terjadi */}
        {/* target =  target kejadian yang sedang terjadi. contoh disini yaitu input full-name */}
        {/* value = apapun yang di ketik saat itu juga */}
        <input
          onChange={(event) => setFullNameInput(event.target.value)}
          id="full-name"
          type="text"
          value={fullNameInput}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => setEmailInput(event.target.value)}
          id="email"
          type="email"
          value={emailInput}
        />
        <span style={{color:'red'}}>{fullNameErrorMessage}</span>
        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => setPasswordInput(event.target.value)}
          id="password"
          type="password"
          value={passwordInput}
        />
        <span style={{color:'red'}}>{passwordErrorMessage}</span>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default FormPage;
