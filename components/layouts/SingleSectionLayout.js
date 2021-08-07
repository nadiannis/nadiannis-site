import { useTheme } from '../../store/themeContext';

import MinimalHeader from './MinimalHeader';
import MinimalFooter from './MinimalFooter';

export default function SingleSectionLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`bg-baseColor min-h-screen flex flex-col ${theme}`}>
      <MinimalHeader />
      <main className="flex-auto flex flex-col items-center justify-center">
        {children}
      </main>
      <MinimalFooter />
    </div>
  );
}
