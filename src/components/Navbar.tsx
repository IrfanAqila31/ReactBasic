import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div style={{display:'flex', gap:'20px'}}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
export default Navbar;
