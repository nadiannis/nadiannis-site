import { Fragment } from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';

export default function ProjectCard({ project }) {
  const tools = project.tools.map((tool, index) => {
    if (index === project.tools.length - 1) {
      return <span key={tool.id}>{tool.name}</span>;
    }
    return (
      <Fragment key={tool.id}>
        <span>{tool.name}</span> &middot;{' '}
      </Fragment>
    );
  });

  return (
    <div className="rounded-4px border dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 active:shadow-lg active:border-gray-300 dark:active:border-gray-600 transition duration-300 ease-in-out block lg:flex">
      <div className="w-full lg:max-w-lg relative h-52 sm:h-80">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          className="rounded-4x lg:rounded-l-4px object-cover"
        />
      </div>
      <div className="p-5 md:p-7">
        <h2 className="text-2xl">{project.name}</h2>
        <p className="mt-4">{project.description}</p>
        <div className="mt-4 text-sm text-muted">{tools}</div>
        <div className="mt-6 flex gap-3">
          <Button link={project.demoUrl} isOpenInNewTab className="btn-solid">
            Demo
          </Button>
          <Button link={project.codeUrl} isOpenInNewTab className="btn-ghost">
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}
