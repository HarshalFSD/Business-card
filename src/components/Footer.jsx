import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <span>
        <FaTwitter />
      </span>
      <span>
        <FaFacebookF />
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaLinkedinIn />
      </span>
      <span>
        <FaGithub />
      </span>
    </footer>
  );
}
