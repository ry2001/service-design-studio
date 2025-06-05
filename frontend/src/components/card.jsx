export default function Card({ title, description, link }) {
  return (
    <a
      className={`bg-white rounded-lg shadow-md p-4 max-w-sm ${
        link ? "hover:cursor-pointer" : "hover:!cursor-default"
      }`}
      href={link}
    >
      <h2 className="text-black text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{description}</p>
    </a>
  );
}
