import { useTheme } from '../../store/themeContext';

import MinimalHeader from './MinimalHeader';
import MinimalFooter from './MinimalFooter';

export default function SingleSectionLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`bg-baseColor h-screen flex flex-col ${theme}`}>
      <MinimalHeader />
      <main className="flex-auto">{children}</main>
      <MinimalFooter />
    </div>
  );
}
