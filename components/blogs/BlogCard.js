import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  const { title, createdAt, image, readingTime, slug } = blog;

  const bannerPath = `/static/images/blogs/${slug}/${image}`;
  const linkPath = `/blog/${slug}`;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <li className="rounded-4px transform hover:translate-y-1 hover:scale-95 transition duration-100 ease-in-out">
      <Link href={linkPath}>
        <a href={linkPath}>
          <Image
            src={bannerPath}
            alt={title}
            width={420}
            height={240}
            layout="responsive"
            objectFit="cover"
            className="rounded-t-4px"
          />
          <div className="py-5">
            <h2 className="text-2xl">{title}</h2>
            <div className="text-sm text-muted mt-2">
              <span>{formattedDate}</span>
              <br />
              <span>{readingTime}</span> &middot; <span>___ views</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
