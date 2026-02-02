import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  
  const {count,handleDecrement,handleIncrement, handleCountReset} = useCounter();
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {/* untuk mentrigger function */}
      <button onClick={handleDecrement}>Kurang</button>
      <p>{count}</p>
      {/* <p>{nama}</p> */}
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleCountReset}>RESET</button>
    </div>
  );
};
export default Counter;
