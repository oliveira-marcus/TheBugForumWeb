import {
  Award,
  Bookmark,
  ChevronUp,
  MessageSquare,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import type { PostInfo } from "../../../routes/Home";

interface PostProps {
  post: PostInfo;
}

export default function Post({ post }: PostProps) {
  return (
    <article
      key={post.id}
      className={`bg-gray-900 rounded-lg border hover:border-blue-600 transition-all ${
        post.isPinned ? "border-blue-600" : "border-gray-800"
      }`}
    >
      <div className="p-4">
        {post.isPinned && (
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
            <Award className="w-4 h-4" />
            FIXADO PELA DIRETORIA
          </div>
        )}

        <div className="flex gap-3">
          {/* Vote Section */}
          <div className="flex flex-col items-center gap-1">
            <button className="p-1 hover:bg-gray-800 rounded transition">
              <ChevronUp className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            </button>
            <span className="font-bold text-sm">{post.votes}</span>
            <button className="p-1 hover:bg-gray-800 rounded transition">
              <ChevronUp className="w-6 h-6 text-gray-400 hover:text-red-500 rotate-180" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span className="text-gray-400 px-2 py-1 rounded font-semibold">
                  r/{post.category}
              </span>
              <span>•</span>
              <span>
                Postado por{" "}
                <span className="text-blue-400">u/{post.author}</span>
              </span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>

            <h2 className="text-xl font-bold mb-2 hover:text-blue-400 cursor-pointer">
              {post.title}
            </h2>

            <p className="text-gray-400 mb-4 line-clamp-2">{post.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {post.comments} comentários
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Compartilhar</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm font-medium">Salvar</span>
              </button>
              <button className="ml-auto p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
