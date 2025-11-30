import { Vote } from "lucide-react";
import PostMeta from "../Post/PostMeta";
import PostActions from "../Post/PostActionst";

interface EnqueteOption {
  id: number;
  text: string;
  votes: number;
}

interface EnqueteInfo {
  id: number;
  userId: number;
  title: string;
  content: string;
  options: EnqueteOption[];
  totalVotes: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    createdAt: string;
  };
  _count: {
    comments: number;
  };
}

interface EnqueteProps {
  enquete: EnqueteInfo;
}

export default function Enquete({ enquete }: EnqueteProps) {
  const getPercentage = (votes: number, total: number) => {
    if (total === 0) return 0;
    return Math.round((votes / total) * 100);
  };

  return (
    <article className="bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition-all">
      <div className="p-4">
        <div className="flex-1">
          <PostMeta
            category={"Enquetes"}
            author={enquete.user.username}
            timestamp={enquete.createdAt}
          />

          <div className="flex items-center gap-2 mb-2">
            <Vote className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold hover:text-blue-400 cursor-pointer">
              {enquete.title}
            </h2>
          </div>

          <p className="text-gray-400 mb-4">{enquete.content}</p>

          <div className="space-y-2 mb-4">
            {enquete.options.map((option) => {
              const percentage = getPercentage(option.votes, enquete.totalVotes);
              return (
                <div key={option.id} className="relative">
                  <button className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-600 rounded-lg p-3 transition">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{option.text}</span>
                      <span className="text-gray-400 text-sm">
                        {option.votes} {option.votes === 1 ? "voto" : "votos"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-blue-400 text-xs mt-1 block">
                      {percentage}%
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>
              Total de votos: <span className="text-blue-400 font-semibold">{enquete.totalVotes}</span>
            </span>
          </div>

          <PostActions
            commentsCount={enquete._count.comments}
            votes={0}
          />
        </div>
      </div>
    </article>
  );
}

