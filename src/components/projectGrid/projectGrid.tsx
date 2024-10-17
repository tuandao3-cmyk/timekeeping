import React from "react";

const projects = [
  {
    title: "Salala AI",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 98%",
    imageUrl: "/img/salala_ai.png",
  },
  {
    title: "Salala AI",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/salala_egde.png",
  },
  {
    title: "Salala AI",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/salala_ai_blockchain.png",
  },
  {
    title: "Egabid",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/egabid.png",
  },
  {
    title: "Salala AI",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/salala_ai1.png",
  },
  {
    title: "Salala AI",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/salala_ai_blockchain.png",
  },
  {
    title: "Salala mini bot",
    totalFunding: "$3.000.000",
    currentFunding: "$1.500.00",
    fundingPercent: "Được tài trợ 50%",
    imageUrl: "/img/salala_minibot.png",
  },
];

export const ProjectCard: React.FC<{
  project: (typeof projects)[0];
  className?: string;
}> = ({ project, className }) => {
  return (
    <div className={`${className} relative w-full h-[268px]`}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 w-full flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-lg font-bold text-white">{project.title}</h2>
        <div className="flex justify-between gap-5">
          <p className="text-xs font-semibold text-white">
            {project.totalFunding}
          </p>
          <p className="text-xs text-gray-300">
            {project.currentFunding} | {project.fundingPercent}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          className={index == 0 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
