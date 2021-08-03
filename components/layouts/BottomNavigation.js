import { useState } from 'react';
import { IoMdHome, IoMdMenu, IoMdClose } from 'react-icons/io';

import Container from '../ui/Container';
import IconButton from '../ui/IconButton';
import NavLinkList from '../ui/NavLinkList';
import ThemeButton from '../ui/ThemeButton';

export default function BottomNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3.5 bg-baseColor border-t border-gray-200 dark:border-gray-700 fixed mdplus:hidden w-full bottom-0 left-0">
      <Container>
        <div className="flex justify-between items-center">
          <ThemeButton />
          <IconButton link="/">
            <IoMdHome />
          </IconButton>
          <nav>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </IconButton>
            {isOpen && <NavLinkList />}
          </nav>
        </div>
      </Container>
    </div>
  );
}
