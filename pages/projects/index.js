import Head from 'next/head';

import Layout from '../../components/layouts/Layout';
import Container from '../../components/ui/Container';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I turn ideas into great-looking usable apps. Find out more about me, my writings, and the projects I've created."
        />
        <title>Projects | Annisa Nadia</title>
      </Head>

      <section className="text-main py-12 w-full">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl text-center inline-block border-b border-gray-300 dark:border-gray-600">
              Projects
            </h1>
          </div>
          <div className="py-12">
            <h2 className="text-6xl md:text-7xl lg:text-8xl uppercase text-center text-secondaryInverted mb-6 tracking-widest">
              Coming Soon
            </h2>
            <p className="text-sm md:text-base max-w-screen-md mx-auto text-center">
              This page is currently being worked on. Please come back later.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

ProjectsPage.getLayout = (page) => <Layout>{page}</Layout>;
