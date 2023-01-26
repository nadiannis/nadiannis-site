import { IoMdMail, IoLogoGithub, IoLogoCodepen } from 'react-icons/io';
import { RiLinkedinFill } from 'react-icons/ri';

import SocialLink from './SocialLink';

const socials = [
  {
    id: 'github',
    url: 'https://github.com/nadiannis',
    icon: IoLogoGithub,
    hasBackground: false,
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/nadiannis',
    icon: RiLinkedinFill,
    hasBackground: true,
  },
  {
    id: 'codepen',
    url: 'https://codepen.io/nadiannis',
    icon: IoLogoCodepen,
    hasBackground: false,
  },
  {
    id: 'email',
    url: 'mailto:annisanadianeyla@gmail.com',
    icon: IoMdMail,
    hasBackground: true,
  },
];

export default function SocialLinkList() {
  return (
    <div className="flex justify-center items-center gap-x-5">
      {socials.map((social) => {
        if (!social.hasBackground) {
          return (
            <SocialLink key={social.id} link={social.url}>
              <social.icon className="text-main w-8 h-8 hover:text-secondary active:text-secondary" />
            </SocialLink>
          );
        }

        return (
          <SocialLink key={social.id} link={social.url}>
            <span className="flex items-center justify-center bg-main hover:bg-secondary active:bg-secondary w-7 h-7 rounded-full">
              <social.icon className="text-baseColor w-4 h-4" />
            </span>
          </SocialLink>
        );
      })}
    </div>
  );
}
