import Link from 'next/link';

import Container from '../ui/Container';
import ThemeButton from '../ui/ThemeButton';

export default function MinimalHeader() {
  return (
    <header className="py-3.5">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a href="/" className="font-greycliff font-extrabold text-main">
              nadiannis
            </a>
          </Link>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
}
