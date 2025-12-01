import { ChevronUp, MessageSquare } from "lucide-react";

export default function CommentActions({
  votes,
  onReply,
}: {
  votes: number;
  onReply: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-2xl px-2">
        <button className="p-1">
          <ChevronUp className="w-5 h-5 text-gray-400 hover:text-blue-500" />
        </button>
        <span className="text-sm font-bold">{votes}</span>
        <button className="p-1">
          <ChevronUp className="w-5 h-5 text-gray-400 hover:text-red-500 rotate-180" />
        </button>
      </div>

      <button
        onClick={onReply}
        className="flex items-center gap-1 px-2 py-1 rounded-lg 
                 hover:bg-gray-800 text-gray-400 hover:text-white 
                 transition cursor-pointer text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        Responder
      </button>
    </div>
  );
}
