import { ChevronUp, MessageSquare } from "lucide-react";

export default function PostActions({
  commentsCount,
  votes,
}: {
  commentsCount: number;
  votes: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 bg-gray-800 rounded-2xl px-2">
        <button className="p-1 hover:bg-gray-800 rounded transition cursor-pointer">
          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-blue-500 rotate" />
        </button>
        <span className="font-bold text-sm">{votes}</span>
        <button className="p-1 hover:bg-gray-800 rounded transition cursor-pointer">
          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-red-500 rotate-180" />
        </button>
      </div>

      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm font-medium">{commentsCount} comentários</span>
      </button>
    </div>
  );
}
