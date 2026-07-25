"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "JavaScript", "API"],
    live: "https://weather-now-silk-seven.vercel.app/",
    github: "https://github.com/AbdulSamad7037/weather-app",
    hasLive: true,
  },

  {
    title: "Stock Closing Prediction",
    description: "Predicts stock closing prices using Machine Learning.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Machine Learning"],
    live: "https://stock-closing-price-prediction.streamlit.app/",
    github: "https://github.com/AbdulSamad7037/stock-closing-price-prediction",
    hasLive: true,
  },

  {
    title: "Sales Dashboard",
    description:
      "Interactive Power BI dashboard for sales analysis using Sql and python.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["Power BI", "SQL"],
    github: "https://github.com/AbdulSamad7037/sales-dashboard",
    hasLive: false,
  },

  {
    title: "EdTech Startup Analysis",
    description:
      "Analyzed EdTech startup trends using real-world datasets to uncover funding patterns and market growth.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    tech: ["Power BI", "Python", "SQL"],
    github: "https://github.com/AbdulSamad7037/EdTech-Startup-Data-Analysis",
    hasLive: false,
  },

  {
    title: "Contact Form",
    description:
      "Developed a modern contact form with real-time validation and a responsive layoutDeveloped a modern contact form with real-time validation and a responsive layout. Ensures a smooth  experience.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Tailwind CSS"],
    live: "https://contact-us-form-beta.vercel.app/",
    github: "https://github.com/AbdulSamad7037/contact-form",
    hasLive: true,
  },

  {
    title: "Browser Extension Manager",
    description:
      "A modern browser extension manager built with Next.js, TypeScript, and Tailwind CSS. Users can filter extensions by Active, Inactive.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://browser-extension-manager-c1qv.vercel.app/",
    github: "https://github.com/AbdulSamad7037/browser-extension-manager",
    hasLive: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-[#020817] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-12">
          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">My Projects</h2>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Project Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#0f172a]
                border
                border-gray-800
                rounded-xl
                overflow-hidden
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}

              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-5">
                  {project.hasLive ? (
                    <>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          bg-blue-600
                          hover:bg-blue-700
                          rounded-lg
                          py-2.5
                          text-sm
                          font-medium
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition
                        "
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-11
                          h-11
                          border
                          border-gray-700
                          rounded-lg
                          flex
                          items-center
                          justify-center
                          hover:border-blue-500
                          transition
                        "
                      >
                        <FaGithub />
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        bg-gray-800
                        hover:bg-gray-700
                        rounded-lg
                        py-2.5
                        text-sm
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition
                      "
                    >
                      <FaGithub />
                      View PBIX on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
