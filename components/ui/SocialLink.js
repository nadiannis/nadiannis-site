export default function SocialLink({ children, link }) {
  return (
    <div className="mx-3.5">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
}
