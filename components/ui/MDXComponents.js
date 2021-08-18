import Link from 'next/link';
import Image from 'next/image';

const Paragraph = ({ children }) => {
  if (typeof children !== 'string' && children.type === 'img') {
    return (
      <div className="unset-img">
        <Image
          src={children.props.src}
          alt={children.props.alt}
          layout="fill"
          className="custom-img"
        />
      </div>
    );
  }

  return <p className="mt-5">{children}</p>;
};

const CustomLink = ({ href, children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a href={href} className="link">
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
};

const MDXComponents = {
  p: Paragraph,
  a: CustomLink,
  Image,
};

export default MDXComponents;
