"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import to prevent SSR issues with `VerticalTimeline`
const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

import 'react-vertical-timeline-component/style.min.css';

// Define types
type ExperienceItem = {
  companyName: string;
  companyLogo: string;
  position: string;
  duration: string;
  description: string;
  iconBg: string;
};

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
};

// Experience data
const experiences: ExperienceItem[] = [
  {
    companyName: "TechCorp",
    companyLogo: "https://via.placeholder.com/50",
    position: "Software Engineer",
    duration: "Jan 2021 - Dec 2022",
    description: "Worked on building scalable web applications.",
    iconBg: "#1f2937",
  },
  {
    companyName: "InnovateX",
    companyLogo: "https://via.placeholder.com/50",
    position: "Frontend Developer",
    duration: "Feb 2020 - Dec 2020",
    description: "Focused on creating responsive user interfaces.",
    iconBg: "#4b5563",
  },
  {
    companyName: "DataSolutions",
    companyLogo: "https://via.placeholder.com/50",
    position: "Data Analyst",
    duration: "Mar 2018 - Jan 2020",
    description: "Analyzed large datasets to extract insights.",
    iconBg: "#111827",
  },
];

// Card component
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.duration}
      iconStyle={{ background: experience.iconBg }}
      icon={
        mounted ? (
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.companyLogo}
              alt={experience.companyName}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        ) : null
      }
      position={index % 2 === 0 ? "left" : "right"}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.position}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.companyName}
        </p>
      </div>
      <p className="mt-5 text-white-100 text-[14px] tracking-wider">
        {experience.description}
      </p>
    </VerticalTimelineElement>
  );
};

// Parent component
const Experience: React.FC = () => {
  return (
    <div>
      <motion.div>
        <p className="text-center text-secondary text-[16px]">
          What I have done so far
        </p>
        <h2 className="text-center text-white text-[32px] font-bold">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
