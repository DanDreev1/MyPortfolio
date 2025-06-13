'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Settings, Smartphone, Eye } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
  SiPrisma,
  SiVercel,
  SiGithub,
  SiFigma
} from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    icon: <Code2 className="w-6 h-6 text-sky-500" />,
    items: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'React', icon: <SiReact className="text-blue-400"/> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-700"/> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400"/> },
      { name: 'Framer Motion', icon: <SiFramer /> }
    ]
  },
  {
    title: 'Backend & DB',
    icon: <Server className="w-6 h-6 text-indigo-500" />,
    items: [
      { name: 'Supabase', icon: <SiSupabase className="text-green-700"/> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-green-800"/> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-700"/> },
      { name: 'APIs', icon: <span className="text-gray-500">🔌</span> },
      { name: 'Prisma', icon: <SiPrisma /> }
    ]
  },
  {
    title: 'Tools & UX',
    icon: <Settings className="w-6 h-6 text-purple-500" />,
    items: [
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Git/GitHub', icon: <SiGithub /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Responsive Design', icon: <Smartphone className="text-pink-500" /> },
      { name: 'UI/UX Thinking', icon: <Eye className="text-yellow-500" /> }
    ]
  }
];

export const SkillsSnapshot = () => {
  return (
    <section className="py-10 px-4 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Skills Snapshot
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold text-gray-800">{group.title}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-base 2xl:text-[18px] font-medium pl-2">
                {group.items.map(({ name, icon }) => (
                  <li key={name} className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-[24px] text-gray-600">{icon}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};