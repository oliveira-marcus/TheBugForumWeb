import { Link } from "react-router";

export default function PostMeta({
  category,
  author,
  authorId,
  timestamp,
}: {
  category: string;
  author: string;
  authorId: number;
  timestamp: string;
}) {

  const categoryToURLPath: Record<string, string> = {
    "Geral": "/",
    "Eventos": "eventos",
    "Finanças": "financas",
    "Enquetes": "enquetes",
    "Esportes": "esportes"
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
      <Link to={categoryToURLPath[category]}>
        <span className="text-gray-400 hover:text-blue-500 px-2 py-1 rounded font-semibold">
          r/{category}
        </span>
      </Link>
      <span>•</span>
      <span>
        Postado por <Link to={`/users/${authorId}`}><span className="text-blue-400 hover:underline">u/{author}</span></Link>
      </span>
      <span>•</span>
      <span>{timestamp}</span>
    </div>
  );
}
