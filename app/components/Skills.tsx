"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
  { icon: <FaDatabase />, name: "SQL", color: "text-green-400" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    name: "Power BI",
  },
  { icon: <SiPandas />, name: "Pandas", color: "text-blue-400" },
  { icon: <SiNumpy />, name: "NumPy", color: "text-cyan-300" },
  { icon: <FaPython />, name: "Machine Learning", color: "text-purple-400" },
  { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-[#020817] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical Skills
          </h2>

          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Skills */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.08,
              }}
              className="flex flex-col items-center cursor-pointer"
            >

              {skill.image ? (

                <motion.img
                  src={skill.image}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                />

              ) : (

                <motion.div
                  className={`text-5xl ${skill.color}`}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.25,
                    rotate: 12,
                  }}
                >
                  {skill.icon}
                </motion.div>

              )}

              <p className="mt-3 text-sm text-gray-300 hover:text-blue-400 transition">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}