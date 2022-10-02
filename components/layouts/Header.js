import Link from 'next/link';

import Container from '@/components/ui/Container';
import NavLinkList from '@/components/ui/NavLinkList';
import ThemeButton from '@/components/ui/ThemeButton';

export default function Header() {
  return (
    <header className="py-2.5 mdplus:py-3.5 bg-baseColor border-b border-gray-200 dark:border-gray-700 z-10 mdplus:border-0 mdplus:sticky mdplus:top-0 mdplus:bg-opacity-75 mdplus:backdrop-filter mdplus:backdrop-blur-md mdplus:backdrop-saturate-100">
      <Container>
        <div className="text-center">
          <Link href="/">
            <a
              href="/"
              className="font-greycliff font-extrabold text-main inline-block mdplus:absolute mdplus:inset-0 mdplus:m-auto mdplus:h-7 mdplus:w-20"
            >
              nadiannis
            </a>
          </Link>
        </div>
        <div className="hidden mdplus:flex mdplus:justify-between mdplus:items-center">
          <ThemeButton />
          <nav>
            <NavLinkList />
          </nav>
        </div>
      </Container>
    </header>
  );
}
