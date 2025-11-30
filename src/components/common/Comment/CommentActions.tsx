import { ChevronUp, MessageSquare } from "lucide-react";

export default function CommentActions({ votes }: { votes: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-2xl px-2">
        <button className="p-1 rounded transition cursor-pointer">
          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-blue-500 rotate" />
        </button>
        <span className="font-bold text-sm">{votes}</span>
        <button className="p-1 rounded transition cursor-pointer">
          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-red-500 rotate-180" />
        </button>
      </div>

      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg 
                       hover:bg-gray-800 text-gray-400 hover:text-white 
                       transition cursor-pointer"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm font-medium">Responder</span>
      </button>
    </div>
  );
}
