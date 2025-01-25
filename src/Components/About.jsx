import React from "react";
import { Mail, Phone, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import tushar from '../assets/images/tushar.jpeg';
import defaultImage from '../assets/images/ProjectLoad.png';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="pt-16 pb-8 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-normal text-white text-center mb-2">About Me</h1>
        <p className="text-[#CBFE47] mt-4">
          Currently Learning: Diving deep into Frontend to master the potential of bringing designs to life!
        </p>
      </header>

      {/* Beyond Portfolio Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto p-8 bg-[#151A23] rounded-lg">
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            <img
              src={tushar}
              alt="Profile"
              width={300}
              height={400}
              className="rounded-lg w-full"
            />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Curious about me? Here you have it:</h3>
              <div className="space-y-4 text-gray-300 text-justify">
                <p>
                I’m Tushar Gupta, a final-year Computer Science and Engineering student at Chandigarh University, specializing in AI and Machine Learning. I’m passionate about technology, and currently working on KrafX, an NFC-based payment system for digital soundboxes. As the founder of Kraf Technologies, I lead a team to develop innovative software solutions. I also organize ‘Kraf Think 2025,’ a hackathon fostering creativity among students. Always eager to learn and explore new technologies, I’m focused on using tech to solve real-world problems.
                </p>
              </div>
              <div className="space-y-2 text-[#CBFE47]">
                <p>• Software Developer</p>
                <p>• Freelencer</p>
                <p>• Building Kraf Technologies</p>
              </div>
              <div className="flex justify-left gap-4 mt-8">
        <a href="https://github.com/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Github className="w-5 h-5" />
          </button>
        </a>
        <a href="https://linkedin.com/in/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Linkedin className="w-5 h-5" />
          </button>
          </a>
          <a href="https://instagram.com/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Instagram className="w-5 h-5" />
          </button>
          </a>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">The skills, tools and technologies I am really good at:</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-4 md:grid-cols-8 gap-8 mt-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} width={48} height={48} />
              </div>
              <span className="text-sm text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Some of the noteworthy projects I have built:</h2>
        <div className="max-w-4xl mx-auto space-y-8">
  {projects.map((project, index) => (
    <div key={index} className="bg-[#151A23] border-none p-6 rounded-lg">
      <div
        className={`flex flex-col md:flex-row gap-6 ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={project.image || defaultImage}
            alt={project.title}
            className="rounded-lg w-full h-full object-cover"
            style={{ aspectRatio: "4 / 3" }}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-700 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">What's next? Feel free to reach out to me if you're looking for</h2>
        <p className="text-gray-400 mb-8">a developer, have a query, or simply want to connect.</p>
        <div className="flex flex-col items-center gap-4">
          <button className="text-white flex items-center gap-2">
            <Mail className="w-5 h-5" />
            tusharguptagps@gmail.com
          </button>
          <button className="text-white flex items-center gap-2">
            <Phone className="w-5 h-5" />
            +91 9893741437
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-8">
        <a href="https://github.com/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Github className="w-5 h-5" />
          </button>
        </a>
        <a href="https://linkedin.com/in/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Linkedin className="w-5 h-5" />
          </button>
          </a>
          <a href="https://instagram.com/imtushaarr" target="_blank" rel="noopener noreferrer">
          <button className="text-white">
            <Instagram className="w-5 h-5" />
          </button>
          </a>
        </div>
      </section>
    </div>
  );
}

const technologies = [
  { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/683px-ISO_C%2B%2B_Logo.svg.png" },
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png" },
  { name: "Node.js", icon: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" },
  { name: "Express.js", icon: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" },
  { name: "Docker", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" },
  { name: "Socket.io", icon: "https://avatars.githubusercontent.com/u/10566080?s=280&v=4" },
  { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" },
  { name: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  { name: "Sass/Scss", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" },
  { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
  { name: "Figma", icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" },
  { name: "Vercel", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png" },
  { name: "FireBase", icon: "https://brandeps.com/logo-download/F/Firebase-logo-02.png" },
  { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
];

const projects = [
  {
    title: "Email Forwarding System",
    description:
      "The Email Forwarding System is a Node.js application designed to automatically forward emails from one email account to another based on specified criteria. This application helps users efficiently manage their emails by automating the forwarding process, ensuring important messages are not missed.",
    image: "",
    technologies: [
      "HTML",
      "NodeJS",
      "JavaScript",
      "Express",
      "Nodemailer",
      "ExcelJS",
      "IMAP-simple",
      "Vercel",
      "CSS",
    ],
  },
  {
    title: "ProjectVerse",
    description:
      "ProjectVerse is a versatile online platform where users can browse and find paid and unpaid projects, as well as hire developers for custom project development and software solutions. It aims to connect project seekers and developers in a seamless way, enabling collaboration, knowledge sharing, and growth. Whether you're looking for ready-made projects or seeking a developer to build a new one, ProjectVerse provides an all-in-one platform to meet your needs.",
    image: "https://private-user-images.githubusercontent.com/92511269/386629874-b29847fb-1517-4475-8cc7-60fbc1e428b9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc4MTA5NzcsIm5iZiI6MTczNzgxMDY3NywicGF0aCI6Ii85MjUxMTI2OS8zODY2Mjk4NzQtYjI5ODQ3ZmItMTUxNy00NDc1LThjYzctNjBmYmMxZTQyOGI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTI1VDEzMTExN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIwYjNlMzk1NzBmNzc0YWMyMTI3MzZlZTE1NDQwOGM3ZWJjYjIxYmZkZTU4YWIxYTlkOWFiZGIyZTI3YTVhZjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Qs7DuhSaDldu_Fpdaetv9Ffy0sJafyxdzjnGzBLkZ-E",
    technologies: [
      "React",
      "NodeJS",
      "JavaScript",
      "MongoDB",
      "Razopay",
      "Tailwindcss",
      "Figma",
      "Vercel",
      "Git",
    ],
  },
  // Repeat other projects similarly...
];