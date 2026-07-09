"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-gray-800 py-8">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl  font-black text-blue-500">
              AS.
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Frontend Developer | React | Next.js
            </p>

          </div>

          

          {/* Social */}

          <div className="flex gap-4">

            <a
              href="https://github.com/AbdulSamad7037"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#020817] flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/abdul-samad02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#020817] flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:absamad1188@gmail.com"
              className="w-10 h-10 rounded-lg bg-[#020817] flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500  text-sm">
            © 2026 Abdul Samad. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}