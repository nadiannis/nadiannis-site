import Link from 'next/link';

export default function NavLink({ text, link }) {
  return (
    <li className="mb-9 mdplus:mb-0 mdplus:ml-6">
      <Link href={link}>
        <a
          href={link}
          className="text-main hover:text-secondary active:text-secondary mdplus:text-sm"
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
