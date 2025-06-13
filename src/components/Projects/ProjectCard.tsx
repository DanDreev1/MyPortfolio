'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={500}
        className="w-full h-70 object-cover"
      />
      <div className="p-5 2xl:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl 2xl:text-[24px] font-bold text-gray-900">{project.title}</h3>
          <p className="mt-2 text-sm 2xl:text-base text-gray-700">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 text-xs font-medium text-gray-600">
            {project.technologies.map((tech, i) => (
              <li key={i} className="bg-gray-100 px-2 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Link href={project.link} target="_blank" className="mt-5 inline-block text-indigo-600 font-semibold hover:underline text-sm 2xl:text-base">
          Preview the experience
        </Link>
      </div>
    </motion.div>
  );
};