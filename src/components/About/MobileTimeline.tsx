'use client';

import { useEffect, useState } from 'react';
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
      'Database development and basic understanding of cyber security and how to protect databases from thieves',
    ],
  },
  {
    date: '2023 – 2024',
    title: 'Front End Developer',
    org: 'Electomagnit',
    icon: <Code2 />,
    points: [
      'Developed a simple web application at the beginning of my journey to optimize both SEO and performance',
    ],
  },
  {
    date: '2024 – Present',
    title: 'Web Design and Development',
    org: 'Edinburgh Napier University',
    icon: <GraduationCap />,
    points: [
      'First year: Learning web design and basics of how to develop a website. Also how sound design works and what experience can be in the digital world',
    ],
  },
];

export default function MobileExperienceTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <section className="py-10 px-10">
      <div className="relative border-l-4 border-white/70 pl-6">
        {experience.map((item, index) => (
          <div key={index} className="relative mb-10">
            {/* Иконка */}
            <div className="absolute -left-[45px] top-0 w-10 h-10 rounded-full border-4 border-white bg-gray-900 text-white flex items-center justify-center">
              {item.icon}
            </div>
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-500 mb-5">{item.date}</p>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <span className="text-base font-medium text-gray-600">{item.org}</span>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}