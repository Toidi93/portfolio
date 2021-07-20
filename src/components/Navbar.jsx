import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="container row-between">
        <h1 class="navbar-title">Henrik Kristian Thomsen</h1>
        <div>
          <Link to="/">Home </Link>
          <Link to="/timeline">Timeline </Link>
        </div>
      </div>
    </nav>
  );
}
