import Link from 'next/link';
import Image from 'next/image';

import Container from '../ui/Container';

export default function MinimalHeader() {
  return (
    <header className="py-3">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a href="/" className="font-greycliff font-extrabold text-main">
              nadiannis
            </a>
          </Link>
          <button type="button" className="w-7 h-7">
            <Image
              src="/static/icons/dark-mode-btn.svg"
              width="32"
              height="32"
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
