import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ background: "#7B4F2E", padding: "1rem 2rem", display: "flex", justifyContent: "space-between" }}>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "#D4B49A", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>Home</NavLink>
      <NavLink to="/shop" style={({ isActive }) => ({ color: isActive ? "white" : "#D4B49A", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>Shop</NavLink>
      <NavLink to="/admin" style={({ isActive }) => ({ color: isActive ? "white" : "#D4B49A", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>Admin Portal</NavLink>
    </nav>
  );
}

export default NavBar;
