
"use client";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

import {
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

export default function Hero() {

  const text = "Developer";
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-20 pb-10 px-6 bg-[#020817]"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 border border-green-500 rounded-full px-4 py-2 mb-5">

              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-green-400 text-sm">
                Open To Work
              </span>

            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">

              Abdul

              <span className="text-blue-500">
                {" "}Samad
              </span>

            </h1>

            <motion.h2 className="text-3xl md:text-4xl font-bold mt-3 flex justify-center lg:justify-start">
              <span className="text-blue-400">Frontend</span>

              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.5,
                    duration: 1,
                    
                    repeat: 1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-gray-400 mt-5 leading-7 max-w-xl mx-auto lg:mx-0">

              Passionate Front-End Developer skilled in
              HTML, CSS, JavaScript, React.js,
              Next.js and Tailwind CSS.

              I also have knowledge of Python,
              SQL, Power BI and Machine Learning.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

              <a
                href="/Abdul_Samad_F.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg flex items-center gap-2"
              >
                <FiDownload />
                Resume
              </a>

              <a
                href="#projects"
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition px-5 py-3 rounded-lg flex items-center gap-2"
              >
                Projects
                <FiArrowRight />
              </a>

            </div>

            {/* Social */}

            <div className="flex justify-center lg:justify-start gap-4 mt-8">

              <a
                href="https://github.com/AbdulSamad7037"
                target="_blank"
                className="w-11 h-11 rounded-lg bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/abdul-samad02"
                target="_blank"
                className="w-11 h-11 rounded-lg bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:absamad1188@gmail.com"
                className="w-11 h-11 rounded-lg bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5  shadow-[0_0_40px_rgba(59,130,246,0.25)]
  ">

              <div className="flex justify-between items-center mb-5">

                <div className="flex gap-2">

                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                </div>

                <span className="text-xs text-gray-500">
                  developer.ts
                </span>

              </div>

              <div className="font-mono text-sm leading-7">

                <p className="text-gray-500">
                  // Developer Profile
                </p>

                <br />

                <p>
                  <span className="text-pink-500">
                    const
                  </span>{" "}

                  <span className="text-blue-400">
                    developer
                  </span>{" = {"}
                </p>

                <p className="pl-5">
                  name:
                  <span className="text-green-400">
                    {" "} "Abdul Samad",
                  </span>
                </p>

                <p className="pl-5">
                  role:
                  <span className="text-green-400">
                    {" "} "Frontend Developer",
                  </span>
                </p>

                <p className="pl-5">
                  skills:
                  <span className="text-orange-400">
                    {" "}["React","Next","Tailwind"],
                  </span>
                </p>

                <p className="pl-5">
                  tools:
                  <span className="text-orange-400">
                    {" "}["Python","SQL","Power BI"],
                  </span>
                </p>

                <p className="pl-5">
                  status:
                  <span className="text-green-400">
                    {" "} "Open To Work"
                  </span>
                </p>

                <p>{"};"}</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}