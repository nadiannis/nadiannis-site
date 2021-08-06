import Head from 'next/head';
import Link from 'next/link';

import SingleSectionLayout from '../components/layouts/SingleSectionLayout';
import Container from '../components/ui/Container';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I turn ideas into great-looking usable apps. Find out more about me, my writings, and the projects I've created."
        />
        <title>Annisa Nadia</title>
      </Head>

      <section className="py-10 h-full flex justify-center items-center">
        <Container>
          <div className="text-center lg:text-left block lg:flex justify-between items-center">
            <div className="">
              <span className="text-sm sm:text-lg lg:text-xl block text-secondary font-bold mb-1">
                Personal site of
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-main mb-12 tracking-widest">
                Annisa Nadia
              </h1>
            </div>
            <div className="ml-0 lg:ml-7">
              <div>
                <Link href="/blog">
                  <a href="/blog" className="link">
                    Blog
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/projects">
                  <a href="/projects" className="link">
                    Projects
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a href="/about" className="link">
                    About
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

HomePage.getLayout = (page) => (
  <SingleSectionLayout>{page}</SingleSectionLayout>
);
