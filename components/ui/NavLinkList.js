import NavLink from './NavLink';

export default function NavLinkList() {
  return (
    <ul className="w-40 sm:w-52 pt-14 pb-16 pl-8 pr-5 sm:pr-7 md:pr-14 text-right absolute bottom-0 right-0 bg-shade1 rounded-4px shadow-xlTop mdplus:bg-transparent mdplus:flex mdplus:w-auto mdplus:p-0 mdplus:static mdplus:rounded-none mdplus:shadow-none">
      <NavLink text="Blog" link="/blog" />
      <NavLink text="Projects" link="/projects" />
      <NavLink text="About" link="/about" />
    </ul>
  );
}
