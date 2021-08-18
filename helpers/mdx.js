import fs from 'fs';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

export const blogDirectory = path.join(process.cwd(), 'data/blog');

export const getBlog = async (slug) => {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: blogDirectory,
  });

  return {
    ...frontmatter,
    slug,
    code,
  };
};

export const getAllBlogsData = () => {
  const blogs = fs.readdirSync(blogDirectory);

  const blogsData = blogs.map((blogFileName) => {
    const filePath = path.join(blogDirectory, blogFileName);
    const source = fs.readFileSync(filePath, 'utf-8');

    const { data: frontmatter } = matter(source);
    const slug = blogFileName.replace(/\.mdx?$/, '');

    return {
      ...frontmatter,
      slug,
    };
  });

  const sortedBlogs = blogsData.sort((blog1, blog2) =>
    blog1.createdAt > blog2.createdAt ? -1 : 1
  );

  return sortedBlogs;
};
