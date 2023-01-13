import Container from '@/components/ui/Container';
import SocialLinkList from '@/components/ui/SocialLinkList';

export default function Footer() {
  return (
    <footer className="text-center bg-shade1 text-secondary pt-16 pb-20 mdplus:pb-4">
      <Container>
        <h2 className="text-4xl mb-7">Get in Touch</h2>
        <SocialLinkList />
        <span className="block text-xs mt-16">
          &copy; 2021 - {new Date().getFullYear()} Annisa Nadia Neyla
        </span>
      </Container>
    </footer>
  );
}
