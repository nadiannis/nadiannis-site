import Container from '../ui/Container';
import SocialLinkList from '../ui/SocialLinkList';
import Button from '../ui/Button';

export default function MinimalFooter() {
  return (
    <footer className="text-center bg-shade1 text-secondary pt-16 pb-20 mdplus:pb-4">
      <Container>
        <h2 className="text-4xl mb-7">Get in Touch</h2>
        <Button link="/contact-me" className="btn-ghost mb-8">
          Send a Message
        </Button>
        <hr className="w-12 mx-auto border border-gray-300 dark:border-gray-600 mb-8" />
        <SocialLinkList />
        <span className="block text-xs mt-16">
          &copy; 2021 Annisa Nadia Neyla
        </span>
      </Container>
    </footer>
  );
}
