import Header from './Header';
import Footer from './Footer';
import BottomNavigation from './BottomNavigation';

export default function Layout({ children }) {
  return (
    <div className="bg-baseColor min-h-screen flex flex-col">
      <Header />
      <main className="flex-auto flex flex-col items-center">{children}</main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
