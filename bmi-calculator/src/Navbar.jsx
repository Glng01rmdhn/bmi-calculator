// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Beranda</Link>
      <Link to="/detail">Detail</Link>
    </nav>
  );
}

export default Navbar;
