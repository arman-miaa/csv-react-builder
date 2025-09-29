import {  FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <FaGithub className="text-5xl mb-2" />
        <p className="font-bold text-lg">
          csv-react-builder
          <br />
          Building modern UI with React, Tailwind & DaisyUI
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

     
    </footer>
  );
}
