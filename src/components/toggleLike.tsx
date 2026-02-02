import { useLike } from "../hooks/useLike";

const ToggleLike = () => {
  const { like, handleLike } = useLike();
  return (
    <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
      <button onClick={handleLike} className={`like-btn ${like ? "active" : ""}`}
        aria-pressed={like}>Like</button>
      {like && <p>❤️ Suka</p>}
    </div>
    
  );
};
export default ToggleLike;
