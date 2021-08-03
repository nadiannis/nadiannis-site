import { IoLogoGithub, IoLogoCodepen } from 'react-icons/io';
import { RiLinkedinFill } from 'react-icons/ri';

import SocialLink from './SocialLink';

export default function SocialLinkList() {
  return (
    <div className="flex justify-center items-center">
      <SocialLink link="https://github.com/nadiannis">
        <IoLogoGithub className="text-main w-8 h-8 hover:text-secondary active:text-secondary" />
      </SocialLink>
      <SocialLink link="https://www.linkedin.com/in/nadiannis">
        <span className="flex items-center justify-center bg-main hover:bg-secondary active:bg-secondary w-7 h-7 rounded-full">
          <RiLinkedinFill className="text-baseColor w-4 h-4" />
        </span>
      </SocialLink>
      <SocialLink link="https://codepen.io/nadiannis">
        <IoLogoCodepen className="text-main w-8 h-8 hover:text-secondary active:text-secondary" />
      </SocialLink>
    </div>
  );
}
