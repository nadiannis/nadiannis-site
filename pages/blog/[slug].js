import Head from 'next/head';
import Image from 'next/image';
import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import Layout from '../../components/layouts/Layout';
import Container from '../../components/ui/Container';
import MDXComponents from '../../components/ui/MDXComponents';
import { getAllBlogsData, getBlog } from '../../helpers/mdx';

export default function BlogPage({ blog }) {
  const { title, author, createdAt, summary, image, slug, code } = blog;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  const bannerPath = `/static/images/blogs/${slug}/${image}`;
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
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
              <div className="text-md text-muted mt-6">
                <span className="block font-bold">{author}</span>
                <span>{formattedDate}</span> &middot; <span>3 min read</span>
              </div>
              <div className="mt-6 pb-1">
                <Image
                  src={bannerPath}
                  alt={title}
                  width={420}
                  height={240}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-sm object-center"
                />
              </div>
            </header>
            <Component components={{ ...MDXComponents }} />
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
