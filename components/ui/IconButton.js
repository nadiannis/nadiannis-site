import Link from 'next/link';

export default function IconButton({ children, link, onClick }) {
  if (!link) {
    return (
      <button
        type="button"
        className="flex justify-center items-center text-main bg-shade3 rounded-full w-7 h-7 z-50 relative"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={link}>
      <a
        href={link}
        className="flex justify-center items-center text-main bg-shade3 rounded-full w-7 h-7 z-50 relative"
      >
        {children}
      </a>
    </Link>
  );
}
