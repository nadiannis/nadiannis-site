import Container from '@/components/ui/Container';
import SocialLinkList from '@/components/ui/SocialLinkList';

export default function MinimalFooter() {
  return (
    <footer className="text-center bg-shade1 py-8">
      <Container>
        <SocialLinkList />
        <span className="block text-xs text-secondary mt-4">
          &copy; 2021 Annisa Nadia Neyla
        </span>
      </Container>
    </footer>
  );
}
