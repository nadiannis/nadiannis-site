import MinimalHeader from './MinimalHeader';
import MinimalFooter from './MinimalFooter';

export default function SingleSectionLayout({ children }) {
  return (
    <div className="bg-baseColor h-screen flex flex-col">
      <MinimalHeader />
      <main className="flex-auto">{children}</main>
      <MinimalFooter />
    </div>
  );
}
