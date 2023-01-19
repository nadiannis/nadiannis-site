import { Fragment } from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';

export default function ProjectCard({ project }) {
  const tools = project.tools.map((tool, index) => {
    if (index === project.tools.length - 1) {
      return <span key={tool}>{tool}</span>;
    }
    return (
      <Fragment key={tool}>
        <span>{tool}</span> &middot;{' '}
      </Fragment>
    );
  });

  return (
    <div className="rounded-4px block lg:flex">
      <div className="w-full lg:max-w-lg relative h-52 sm:h-80">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          className="rounded-4x lg:rounded-l-4px object-cover"
        />
      </div>
      <div className="ml-0 lg:ml-7 px-0 py-5 lg:py-0 lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-2xl">{project.name}</h2>
        <p className="mt-3">{project.description}</p>
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
