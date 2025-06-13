import Header from '@/components/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';
import MobileBottomNav from '@/components/MobileNav';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['800', "600"] });

export const metadata = {
  title: 'Daniil Andriev | Full Stack Developer',
  description: 'Digital Portfolio of Daniil Andriev – Full Stack Developer based in the UK.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#cbd5e12a] text-black text-[24px]`}>
        <Header />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
