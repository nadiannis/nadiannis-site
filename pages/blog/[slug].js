import Head from 'next/head';
import Image from 'next/image';
import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import Layout from '@/components/layouts/Layout';
import Container from '@/components/ui/Container';
import MDXComponents from '@/components/ui/MDXComponents';
import { getAllBlogsData, getBlog } from '@/helpers/mdx';

export default function BlogPage({ blog }) {
  const {
    title,
    author,
    createdAt,
    updatedAt,
    summary,
    image,
    readingTime,
    slug,
    code,
  } = blog;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  const bannerPath = `/static/images/blogs/${slug}/${image}`;
  const formattedDateCreated = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const formattedDateUpdated = new Date(updatedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <Head>
        <meta name="description" content={summary} />
        <title>{title} | Annisa Nadia</title>
      </Head>

      <section className="text-main pb-20 pt-4 w-full">
        <Container>
          <article className="blog max-w-screen-md mx-auto">
            <header>
              <h1 className="text-5xl sm:text-6xl inline-block m-0">{title}</h1>
              <div className="text-md text-muted mt-6 ">
                <span className="block font-bold">{author}</span>
                <span>{formattedDateCreated}</span> &middot;{' '}
                <span>{readingTime}</span> &middot; <span>___ views</span>
              </div>
              <div className="mt-6 pb-2">
                <Image
                  src={bannerPath}
                  alt={title}
                  width={420}
                  height={240}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-4px object-center"
                />
              </div>
            </header>
            <Component components={{ ...MDXComponents }} />
            <div className="text-md mt-12">
              {createdAt !== updatedAt && (
                <span className="block text-muted mb-4">
                  Last updated: {formattedDateUpdated}
                </span>
              )}
              <a
                href={`https://github.com/nadiannis/nadiannis-site/edit/develop/data/blog/${slug}.mdx`}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Edit on GitHub
              </a>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}

BlogPage.getLayout = (page) => <Layout>{page}</Layout>;

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const blog = await getBlog(slug);

  return {
    props: {
      blog,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const blogs = getAllBlogsData();

  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false,
  };
};
