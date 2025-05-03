import React from "react";

type Skills = {
  development: string[];
  devops: string[];
  uiux: string[];
};

const skills: Skills = {
  development: [
    "Javascript",
    "React",
    "NextJS",
    "TailwindCSS",
    "TypeScript",
    "NodeJS",
    "Express",
    "PostgreSQL",
    "REST API",
  ],
  devops: [
    "Git",
    "GitHub",
    "CI/CD",
    "Docker",
    "Jenkins",
    "Linux",
    "Vercel",
  ],
  uiux: ["Figma", "Adobe XD", "Framer", "ShadCN-UI", "Zustand"],
};

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white px-10 py-16 rounded-t-[7rem]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">About Me</h1>

        <p className="mt-6 text-lg">
          I specialize in Full Stack Development, creating scalable and user-friendly applications.
          With expertise in front-end technologies like React and Next.js, I build seamless user
          interfaces. On the backend, I work with Node.js, Express, and databases like MongoDB and PostgreSQL
          to ensure robust functionality.
        </p>

        <p className="mt-4 text-lg">
          As a DevOps practitioner, I streamline deployment processes using CI/CD pipelines,
          Docker, and cloud platforms. My experience in UI/UX design ensures that applications not
          only function well but also offer an intuitive user experience.
        </p>

        <h2 className="mt-16 text-3xl font-semibold">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Object.entries(skills).map(([category, items]) => {
            const categoryTitle = {
              development: "Languages & Frameworks",
              devops: "DevOps Tools",
              uiux: "UI/UX Tools",
            }[category as keyof Skills];

            return (
              <div key={category}>
                <h3 className="text-xl font-bold mb-4">{categoryTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
