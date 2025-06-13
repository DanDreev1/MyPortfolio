"use client";

import { motion } from "framer-motion";
import { Brain, Puzzle, Users } from "lucide-react";

const skills = [
  {
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    title: "Creative Thinker",
    description: "I approach problems with originality and imagination to craft meaningful solutions.",
  },
  {
    icon: <Puzzle className="w-10 h-10 text-green-600" />,
    title: "Problem Solver",
    description: "I enjoy dissecting challenges and delivering elegant, scalable frontend code.",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600" />,
    title: "Team Player",
    description: "Collaboration is at the heart of every great product — I thrive in diverse teams.",
  },
];

export const CoreValues = () => {
  return (
    <section className="py-16 px-4 2xl:px-0 max-w-7xl mx-auto">
      <h2 className="text-3xl 2xl:text-4xl font-semibold mb-12 text-center">What I Bring to the Table</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-white p-6 2xl:p-10 shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl 2xl:text-2xl font-bold mb-2">{skill.title}</h3>
            <p className="text-sm 2xl:text-[20px] text-gray-600">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};