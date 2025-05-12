import React from "react";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  image: string;
  techStack: string;
  large: boolean;
};

const projects: Project[] = [
  {
    title: "Task Management System",
    slug: "Taskmanagement",
    image: "https://via.placeholder.com/400x300?text=Task+Management",
    techStack: "MERN Stack, Socket.IO",
    large: true,
  },
  {
    title: "Image Converter App",
    slug: "Imageconverter",
    image: "https://via.placeholder.com/400x300?text=Image+Converter",
    techStack: "Next.js, Node.js, Sharp",
    large: false,
  },
  {
    title: "Task Management System",
    slug: "Taskmanagement",
    image: "https://via.placeholder.com/400x300?text=Task+Management",
    techStack: "MERN Stack, Socket.IO",
    large: true,
  },
  {
    title: "Task Management System",
    slug: "Taskmanagement",
    image: "https://via.placeholder.com/400x300?text=Task+Management",
    techStack: "MERN Stack, Socket.IO",
    large: true,
  },
  {
    title: "Task Management System",
    slug: "Taskmanagement",
    image: "https://via.placeholder.com/400x300?text=Task+Management",
    techStack: "MERN Stack, Socket.IO",
    large: true,
  },
  {
    title: "Personal Portfolio",
    slug: "portfolio",
    image: "https://via.placeholder.com/400x300?text=Portfolio+Website",
    techStack: "Next.js, Tailwind CSS",
    large: true,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-4">My Projects</h2>
      <p className="text-center text-lg mb-8">
        Explore detailed, custom-built project pages.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projects/${project.slug}`}
            className={`relative block w-full overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
              project.large ? "row-span-2" : "row-span-1"
            }`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: project.large ? "380px" : "180px",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 hover:opacity-100"></div>

            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.techStack}</p>
            </div>

            <div className="absolute bottom-4 right-4 w-5 h-5 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
