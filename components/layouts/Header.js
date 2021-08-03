import Link from 'next/link';

import Container from '../ui/Container';
import NavLinkList from '../ui/NavLinkList';
import ThemeButton from '../ui/ThemeButton';

export default function MinimalHeader() {
  return (
    <header className="py-3.5 bg-baseColor border-b border-gray-200 dark:border-gray-700 mdplus:border-0 mdplus:relative">
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
