"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 px-6 bg-[#020817] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Let's Connect
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT */}

          <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6  shadow-[0_0_40px_rgba(59,130,246,0.25)]
  ">

            <h3 className="text-2xl font-semibold mb-5">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              I'm actively looking for Frontend Developer opportunities.
              Feel free to contact me for internships, jobs or freelance work.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p className="text-sm">
                    absamad1188@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="text-sm">
                    +91 7037887783
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center">
                  <FaLocationDot />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="text-sm">
                    New Delhi, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

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

          {/* RIGHT */}

          <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6  shadow-[0_0_40px_rgba(59,130,246,0.25)]
  ">

            <h3 className="text-2xl font-semibold mb-5">
              Send Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#020817] border border-gray-700 rounded-lg p-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#020817] border border-gray-700 rounded-lg p-3 outline-none focus:border-blue-500"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-[#020817] border border-gray-700 rounded-lg p-3 resize-none outline-none focus:border-blue-500"
              />

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}