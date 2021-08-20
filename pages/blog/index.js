import Head from 'next/head';
import { getAllBlogsData } from '@/helpers/mdx';

import Layout from '@/components/layouts/Layout';
import Container from '@/components/ui/Container';
import BlogList from '@/components/blogs/BlogList';

export default function AllBlogsPage({ blogs }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Thoughts on frontend development, web development, software engineering, life, and more."
        />
        <title>Blog | Annisa Nadia</title>
      </Head>

      <section className="text-main py-8 sm:py-12 w-full">
        <Container>
          <h1 className="text-2xl md:text-3xl inline-block border-b border-gray-300 dark:border-gray-600 mb-7">
            Blog
          </h1>
          <BlogList blogs={blogs} />
        </Container>
      </section>
    </>
  );
}

AllBlogsPage.getLayout = (page) => <Layout>{page}</Layout>;

export const getStaticProps = async () => {
  const blogs = getAllBlogsData();

  return {
    props: {
      blogs,
    },
  };
};
