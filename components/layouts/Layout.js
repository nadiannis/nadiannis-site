import { useTheme } from '../../store/themeContext';

import Header from './Header';
import Footer from './Footer';
import BottomNavigation from './BottomNavigation';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`bg-baseColor h-screen flex flex-col ${theme}`}>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
