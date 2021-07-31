import Link from 'next/link';

export default function Button({ children, link, onClick, className }) {
  if (!link) {
    return (
      <button type="button" onClick={onClick} className={`btn ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={link}>
      <a href={link} className={`btn ${className}`}>
        {children}
      </a>
    </Link>
  );
}
