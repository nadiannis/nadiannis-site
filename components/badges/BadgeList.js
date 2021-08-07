import Badge from './Badge';

export default function BadgeList({ data }) {
  return (
    <ul className="flex gap-3 flex-wrap">
      {data.map((item) => (
        <Badge key={item.id}>{item.name}</Badge>
      ))}
    </ul>
  );
}
