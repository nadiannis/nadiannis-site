import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../store/themeContext';

import Container from '../ui/Container';

export default function MinimalHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-3">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a href="/" className="font-greycliff font-extrabold text-main">
              nadiannis
            </a>
          </Link>
          <button type="button" className="w-7 h-7" onClick={toggleTheme}>
            <Image
              src={`/static/icons/${theme ? 'light' : 'dark'}-mode-btn.svg`}
              width="32"
              height="32"
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
