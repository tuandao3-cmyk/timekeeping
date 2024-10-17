import React from 'react';

export const ProjectCard: React.FC<{
  project: any;
  className?: string;
}> = ({ project, className }) => {
  return (
    <div className={`${className} relative w-full h-auto`}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 w-full flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-lg">
        <h2 className="md:text-lg text-xs font-bold text-white">
          {project.title}
        </h2>
        <p className="md:text-lg text-xs  text-white">{project.subTitle}</p>
        <div className="flex justify-between gap-5">
          <p className="text-xs font-semibold text-[#03A638]">CÔNG NGHỆ</p>
          <p className="text-xs text-gray-300">{project.date}</p>
        </div>
      </div>
    </div>
  );
};
