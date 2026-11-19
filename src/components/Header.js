'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const base = '';
  const links = [
    ['Home', base || '/'],
    ['Research', `${base}/research`],
    ['People', `${base}/people`],
    ['Contact', `${base}/contacts`],
  ];
  return (
    <header
      className="fixed top-0 left-0 right-0 text-white h-16 z-50 flex items-center px-4"
      style={{ background: '#365E71' }}
    >
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link
          href={base || '/'}
          className="text-white text-xl sm:text-2xl font-bold whitespace-nowrap"
        >
          Liu Lab
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-3 sm:gap-6 text-sm sm:text-base">
            {links.map(([label, href]) => {
              const active =
                pathname === href ||
                (label !== 'Home' && pathname.startsWith(`${href}/`));
              return (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-white hover:underline underline-offset-8 ${active ? 'underline' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
