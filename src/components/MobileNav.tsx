'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Folder, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/Projects', label: 'Projects', icon: Folder },
  { href: '/About', label: 'About', icon: Briefcase },
  { href: '/Contact', label: 'Contact', icon: Mail },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white shadow-md z-9999 md:hidden">
      <ul className="flex justify-around items-center py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex flex-col items-center justify-center text-xs font-medium transition-colors duration-200 px-3 py-2 rounded-md',
                  isActive ? 'text-white bg-[#5700c9]' : 'text-gray-500 hover:text-gray-900'
                )}
              >
                <Icon className={cn('h-5 w-5 mb-1', isActive ? 'stroke-white' : 'stroke-current')} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}