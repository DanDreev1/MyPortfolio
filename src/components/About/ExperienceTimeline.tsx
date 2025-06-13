'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const experience = [
  {
    date: '2022 - 2024',
    title: 'Game Development and IT',
    org: 'Coleg Y Cymoedd',
    icon: <Briefcase />, 
    points: [
      'Basic understanding of how a website is developed and how design is done',
      '2D game development in Unity using C# language, as well as 3D model development in Unity',
      'Database development and basic understanding of cyber security and how to protect databases from thieves'
    ]
  },
  {
    date: '2023 – 2024',
    title: 'Front End Developer',
    org: 'Electomagnit',
    icon: <Code2 />, 
    points: [
      'Developed a simple web application at the beginning of my journey to optimize both SEO and performance',
    ]
  },
  {
    date: '2024 – Present',
    title: 'Web Design and Development',
    org: 'Edinburgh Napier University',
    icon: <GraduationCap />, 
    points: [
      'First year: Learning web design and basics of how to develop a website. Also how sound design works and what experience can be in the digital world'
    ]
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-14 px-4 md:py-24">
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>

        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 2xl:w-2 bg-white/70"></div>
          <ul className="space-y-16">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.li
                  key={index}
                  className="relative flex items-start justify-between gap-8 md:gap-16"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {isLeft ? (
                    <>
                      <div className="flex-1 text-left">
                        <div className="bg-white text-gray-800 rounded-xl p-5 shadow-md inline-block max-w-md">
                          <h3 className="text-lg 2xl:text-[24px] font-bold">{item.title}</h3>
                          <span className="text-base 2xl:text-[20px] font-medium text-gray-600">{item.org}</span>
                          <ul className="list-disc list-inside mt-2 text-sm 2xl:text-base text-gray-700 space-y-1">
                            {item.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 2xl:w-15 2xl:h-15 rounded-full border-4 2xl:border-6 border-white bg-gray-900 text-white flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-sm 2xl:text-base font-semibold text-gray-500 mt-2 2xl:mt-5">{item.date}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 text-right">
                        <p className="text-sm 2xl:text-base font-semibold text-gray-500 mt-2 2xl:mt-5">{item.date}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 2xl:w-15 2xl:h-15 rounded-full border-4 2xl:border-6 border-white bg-gray-900 text-white flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="bg-white text-gray-800 rounded-xl p-5 shadow-md inline-block max-w-md">
                          <h3 className="text-lg 2xl:text-[24px] font-bold">{item.title}</h3>
                          <span className="text-base 2xl:text-[20px] font-medium text-gray-600">{item.org}</span>
                          <ul className="list-disc list-inside mt-2 text-sm 2xl:text-base text-gray-700 space-y-1">
                            {item.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};