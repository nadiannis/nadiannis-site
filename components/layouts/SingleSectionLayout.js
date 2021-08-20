import MinimalHeader from './MinimalHeader';
import MinimalFooter from './MinimalFooter';

export default function SingleSectionLayout({ children }) {
  return (
    <div className="bg-baseColor min-h-screen flex flex-col">
      <MinimalHeader />
      <main className="flex-auto flex flex-col items-center justify-center">
        {children}
      </main>
      <MinimalFooter />
    </div>
  );
}
