import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  const { title, createdAt, image, slug } = blog;

  const bannerPath = `/static/images/blogs/${slug}/${image}`;
  const linkPath = `/blog/${slug}`;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <li className="rounded border dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 active:shadow-lg active:border-gray-300 dark:active:border-gray-600 transition duration-300 ease-in-out">
      <Link href={linkPath}>
        <a href={linkPath}>
          <Image
            src={bannerPath}
            alt={title}
            width={420}
            height={240}
            layout="responsive"
            objectFit="cover"
            className="rounded-t-sm"
          />
          <div className="text-center my-7 px-5">
            <div className="text-md text-muted mb-1">
              <span>{formattedDate}</span> &middot; <span>3 min read</span>
            </div>
            <h2 className="text-2xl">{title}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
}
