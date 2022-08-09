import Head from 'next/head';
import Link from 'next/link';
import valuesData from '@/data/values.json';
import skillsData from '@/data/skills.json';
import interestsData from '@/data/interests.json';

import Layout from '@/components/layouts/Layout';
import Container from '@/components/ui/Container';
import BadgeList from '@/components/badges/BadgeList';

export default function AboutPage() {
  const filterSkillsByCategory = (skills, category) =>
    skills.filter((skill) => skill.category === category);

  const skillsGoodAt = filterSkillsByCategory(skillsData, 'good at');
  const skillsFamiliarWith = filterSkillsByCategory(
    skillsData,
    'familiar with'
  );
  const skillsWannaLearnMore = filterSkillsByCategory(
    skillsData,
    'wanna learn more'
  );

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
                Hi, I&apos;m Nadia. I&apos;m a computer science student at
                Diponegoro University, who aspires to be a software developer. I
                like creating things, especially things that can be created with
                a computer. I interact a lot with computers.
              </p>
              <p className="mb-5">
                Creating things that can make a difference in people&apos;s
                lives is my mission. Self-awareness and constant learning are
                tools that help me grow. I enjoy learning from books, articles,
                videos, podcasts, and people in communities.
              </p>
              <p className="mb-5">
                Combining the art of design with the science of programming has
                been fascinating to me. I like to turn ideas into great-looking
                usable apps. But I also enjoy dealing with behind-the-scenes
                processes in apps. My goal is to create production-ready apps
                that solve problems.
              </p>
              <p className="mb-5">
                I was born in Jakarta, grew up in Bekasi, and went to school to
                learn computer science in Semarang, Indonesia. Apart from
                programming, I spend my spare time reading,{' '}
                <Link href="/blog">
                  <a href="/blog" className="link">
                    writing
                  </a>
                </Link>
                , watching YouTube videos, listening to podcasts, and{' '}
                <a
                  href="https://open.spotify.com/playlist/4mzMdEtWIaKrn1tSVWeV0U"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  finding music that I like
                </a>
                .
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
                Skills
              </h2>
              <div className="mb-8">
                <h3 className="mb-3">Good at</h3>
                <BadgeList data={skillsGoodAt} />
              </div>
              <div className="mb-8">
                <h3 className="mb-3">Familiar with</h3>
                <BadgeList data={skillsFamiliarWith} />
              </div>
              <div className="mb-8">
                <h3 className="mb-3">Wanna learn more about</h3>
                <BadgeList data={skillsWannaLearnMore} />
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
          </div>
        </Container>
      </section>
    </>
  );
}

AboutPage.getLayout = (page) => <Layout>{page}</Layout>;
