"use client";

import {
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    value: "5+",
    label: "Projects",
  },
  {
    icon: <FaCode />,
    value: "10+",
    label: "Skills",
  },
  {
    icon: <FaGraduationCap />,
    value: "MCA",
    label: "Graduate",
  },
  {
    icon: <FaRocket />,
    value: "Open",
    label: "To Work",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-14 px-6 bg-[#020817] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            About Me
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Who I Am
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side */}

          <div>

            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer
            </h3>

            <p className="text-gray-400 leading-7 mb-4">
              I'm <span className="text-white font-semibold">Abdul Samad</span>,
              an MCA graduate passionate about creating modern,
              responsive and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-7 mb-4">
              I specialize in HTML, CSS, JavaScript,
              React.js, Next.js and Tailwind CSS to build
              fast and responsive websites.
            </p>

            <p className="text-gray-400 leading-7">
              I also have knowledge of Python, SQL,
              Power BI and Machine Learning, allowing me
              to work on both web development and data-driven projects.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="
                bg-[#0f172a]
                border
                border-gray-800
                rounded-xl
                p-4
                hover:border-blue-500
                transition
                duration-300
                text-center
                "
              >

                <div className="text-3xl text-blue-500 flex justify-center mb-3">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}