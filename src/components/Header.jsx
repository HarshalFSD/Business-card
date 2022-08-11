import React from "react";
import { MdEmail } from "react-icons/md";
export default function Header() {
  return (
    <header>
      <img src="./images/Lara smith.png" alt="card-image" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>
        <a href="#">laurasmith.website</a>
      </p>
      <button>
        <MdEmail /> 
        Email
      </button>
    </header>
  );
}
