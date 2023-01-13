export default function SocialLink({ children, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
}
