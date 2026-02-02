import { useState } from "react";
export const useCounter = () => {
  // count yaitu variabel biasa biasa, sedangkan setCount adalah function untuk mengubah nilai count
  // usetate menerima parameter default nilai awal dari variabel count
  // setCount digunakan untuk mengubah nilai count dan merender ulang komponen Counter
  const [count, setCount] = useState(0);
  // const [nama, setNama] = useState("Budi");
  // let count = 0;

  const handleDecrement = () => {
    alert("Decrement clicked");
    //     count -= 1;

    setCount(count - 1);
  };
  const handleIncrement = () => {
    alert("Increment clicked");
    // count = count + 1;
    // count++
    // count += 1;

    setCount(count + 1);
    // setNama("Andi");
  };
  const handleCountReset = () => {
    alert("Reset clicked");
    setCount(0);
  };
  return { count, handleDecrement, handleIncrement, handleCountReset };
};