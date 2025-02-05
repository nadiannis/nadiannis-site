import Head from 'next/head';
import Link from 'next/link';
import valuesData from '@/data/values.json';
import interestsData from '@/data/interests.json';

import Layout from '@/components/layouts/Layout';
import Container from '@/components/ui/Container';
import BadgeList from '@/components/badges/BadgeList';

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I turn ideas into great-looking usable apps. Find out more about me, my writings, and the projects I've created."
        />
        <title>About | Annisa Nadia</title>
      </Head>

      <section className="text-main py-8 sm:py-12 w-full">
        <Container>
          <div className="max-w-screen-md mx-auto">
            <h1 className="text-2xl md:text-3xl inline-block border-b border-gray-300 dark:border-gray-600 mb-7">
              About
            </h1>
            <div>
              <p className="mb-5">
                Hi, I&apos;m Nadia. I love creating things. I find joy in
                creating and refining things along the way. I especially love
                creating with a computer. It gives me the freedom to create
                anytime, anywhere, and turn ideas into something real in ways
                that wouldn&apos;t be possible otherwise.
              </p>
              <p className="mb-5">
                I&apos;m on a journey to get better at digital product creation.
                I want to build things that are not only functional but also
                meaningful. You can find some of my projects{' '}
                <Link href="/projects">
                  <a href="/projects" className="link">
                    here
                  </a>
                </Link>
                .
              </p>
              <p className="mb-5">
                Apart from creating digital products, I spend my spare time
                reading, making sense of life, and learning more about myself. I
                also enjoy writing to clarify my thoughts and actively learn.
                While I keep most of my writing private,{' '}
                <Link href="/blog">
                  <a href="/blog" className="link">
                    a few pieces are available online
                  </a>
                </Link>
                .
              </p>
              <p className="mb-5">
                I was born and currently live in Indonesia. If you resonate with
                any of this, feel free to reach out. I&apos;m open to meaningful
                conversations, collaborations, or just connecting with
                like-minded people.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="mb-5 text-xl border-b dark:border-gray-800">
                Values
              </h2>
              <div className="mb-8">
                <BadgeList data={valuesData} />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-5 text-xl border-b dark:border-gray-800">
                Interests
              </h2>
              <div className="mb-8">
                <BadgeList data={interestsData} />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-5 text-xl border-b dark:border-gray-800">
                Want to Work with Me?
              </h2>
              <div className="mb-8">
                <p className="mb-5">
                  I&apos;m available to help you{' '}
                  <strong>design and implement databases</strong>,{' '}
                  <strong>architect and develop web apps or APIs</strong>, or{' '}
                  <strong>review your code</strong>. I can adapt to any tools,
                  but you&apos;ll find that I work best with <strong>Go</strong>
                  , <strong>SQL</strong>, <strong>PostgreSQL</strong>, and{' '}
                  <strong>MySQL</strong>.
                </p>
                <p className="mb-5">
                  I primarily speak Bahasa Indonesia, but I can also communicate
                  in English well enough to be understood. If you&apos;re not
                  located in Jakarta, Indonesia, I&apos;m happy to work remotely
                  with you.
                </p>
                <p className="mb-5">
                  If you have an exciting project, role, problem, or idea to
                  share, feel free to send me an{' '}
                  <a
                    href="mailto:annisanadianeyla@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    email
                  </a>{' '}
                  or reach out to me on{' '}
                  <a
                    href="https://www.linkedin.com/in/nadiannis"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

AboutPage.getLayout = (page) => <Layout>{page}</Layout>;
