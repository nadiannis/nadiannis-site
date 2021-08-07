export default function Badge({ children }) {
  return (
    <li className="text-sm bg-shade3 text-main px-2 py-1 rounded shadow">
      {children}
    </li>
  );
}
