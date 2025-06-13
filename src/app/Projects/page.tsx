import { ProjectCard } from '@/components/Projects/ProjectCard';
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "King's Cut",
    description: "A stylish and functional website for a barbershop offering a wide range of grooming services. Perfect for local salons that want to stand out and attract more clients.",
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/kings-cut.jpg',
    link: 'https://kings-cut.vercel.app/'
  },
  {
    title: "The King's Brew",
    description: "A warm, atmospheric website for a modern coffee shop with table booking functionality. Designed to showcase personality and improve user experience for local cafés.",
    technologies: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    image: '/images/kings-brew.jpg',
    link: 'https://the-king-s-brew.vercel.app/'
  },
  {
    title: "Lumen Portraits",
    description: "A clean and elegant website for a professional photographer. Includes service descriptions and a contact page — ideal for creatives looking to attract clients online.",
    technologies: ['Next.js', 'Tailwind CSS', 'Lucide Icons'],
    image: '/images/lumen-portraits.jpg',
    link: 'https://lumen-portraits.vercel.app/'
  },
  {
    title: "Electromagnit",
    description: "A commercial website for a company producing custom industrial electromagnets. Highlights product models, technical specifications, and inquiry options.",
    technologies: ['Next.js', 'Tailwind CSS', 'Static SEO'],
    image: '/images/electromagnit.jpg',
    link: 'https://electromagnit.vercel.app/'
  }
];

export default function ProjectsPage() {
  return (
    <>
        <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Projects</h1>
            <p className="text-center text-lg text-gray-700 mb-16">
            Real-world projects showcasing my skills, creativity and attention to detail.
            </p>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
            </div>
        </div>
        </main>
        <Footer />
    </>
  );
}