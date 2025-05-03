import React from "react";

type Project = {
  title: string;
  url: string;
  image: string;
  techStack: string;
  large: boolean;
};

const projects: Project[] = [
  {
    title: "Project 1",
    url: "https://example.com/project1",
    image: "https://via.placeholder.com/400",
    techStack: "React, Node.js",
    large: true,
  },
  {
    title: "Project 2",
    url: "https://example.com/project2",
    image: "https://via.placeholder.com/400",
    techStack: "Angular, Firebase",
    large: false,
  },
  {
    title: "Project 3",
    url: "https://example.com/project3",
    image: "https://via.placeholder.com/400",
    techStack: "Vue, Django",
    large: true,
  },
  {
    title: "Project 4",
    url: "https://example.com/project4",
    image: "https://via.placeholder.com/400",
    techStack: "Svelte, Go",
    large: true,
  },
  {
    title: "Project 5",
    url: "https://example.com/project5",
    image: "https://via.placeholder.com/400",
    techStack: "Next.js, Express.js",
    large: true,
  },
  {
    title: "Project 6",
    url: "https://example.com/project6",
    image: "https://via.placeholder.com/400",
    techStack: "Flask, PostgreSQL",
    large: true,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-4">Image Gallery</h2>
      <p className="text-center text-lg mb-8">Explore our diverse range of project images.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
