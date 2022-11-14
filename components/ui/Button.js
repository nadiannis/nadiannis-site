import Link from 'next/link';

export default function Button({
  children,
  link,
  onClick,
  className,
  isOpenInNewTab = false,
}) {
  if (!link) {
    return (
      <button type="button" onClick={onClick} className={`btn ${className}`}>
        {children}
      </button>
    );
  }

  if (isOpenInNewTab) {
    return (
      <Link href={link}>
        <a
          href={link}
          className={`btn ${className}`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </Link>
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
