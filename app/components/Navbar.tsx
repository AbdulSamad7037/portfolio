"use client";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020817]/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black text-blue-500"
        >
          AS.
        </a>

        {/* Menu */}

        <nav>

          <ul className="hidden md:flex items-center gap-8">

            {links.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-500 transition"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

        </nav>

        {/* Resume */}

        <a
          href="/Abduls.pdf"
          download
          className="hidden md:block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg"
        >
          Resume
        </a>

      </div>
    </header>
  );
}