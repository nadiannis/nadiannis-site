import BlogCard from './BlogCard';

export default function BlogList({ blogs }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-9">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </ul>
  );
}
