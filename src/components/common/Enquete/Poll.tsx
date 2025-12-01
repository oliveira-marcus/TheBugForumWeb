import { useState } from "react";
import type { PollInfo, PollOption } from "../../../types/poll.types";
import { pollService } from "../../../services/poll.service";
import { useAuth } from "../../../contexts/AuthContext";
import { formatTimeStamp } from "../../../utils/datetime";

interface PollProps {
  enquete: PollInfo;
}

export default function Poll({ enquete: poll }: PollProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const { token } = useAuth();

  const [localOptions, setLocalOptions] = useState<PollOption[]>(() =>
    poll.options.map((o) => ({ ...o }))
  );

  const getTotalVotes = (options: PollOption[]) =>
    options.reduce((sum: number, o: PollOption) => sum + (o.voteCount ?? 0), 0);

  const totalVotes = getTotalVotes(localOptions);

  const isExpired = poll.expiresAt ? new Date(poll.expiresAt).getTime() <= Date.now() : false;

  const getPercentage = (votes: number, total: number) => {
    if (total === 0) return 0;
    return Math.round((votes / total) * 100);
  };

  const handleVote = async (optionId: number) => {
    if (!token) {
      alert("Você precisa estar autenticado para votar");
      return;
    }
    if (isExpired) {
      alert("Esta enquete já expirou e não aceita mais votos.");
      return;
    }

    if (hasVoted) return; // prevent voting again/change

    try {
      setIsLoading(true);
      const result = await pollService.votePoll(poll.id, [optionId]);

      // result contains options with id and votes/counts
      // map result back to localOptions
      const updatedOptions = localOptions.map((opt: PollOption) => {
        const found = result.options.find((r: any) => r.id === opt.id);
        if (found) {
          return { ...opt, voteCount: found.votes ?? found.votes, optionText: found.text ?? opt.optionText } as PollOption;
        }
        return opt;
      });

      setLocalOptions(updatedOptions);
      setHasVoted(true);
    } catch (error) {
      console.error("Erro ao votar:", error);
      alert("Erro ao enviar voto");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition-all">
      <div className="p-4">
        <div className="flex-1">
          <div className="space-y-2 mb-4">
            {localOptions.map((option: PollOption) => {
              const percentage = getPercentage(option.voteCount ?? 0, totalVotes);
              return (
                <div key={option.id} className="relative">
                  <button
                    onClick={() => handleVote(option.id)}
                    disabled={hasVoted || isLoading || isExpired}
                    className={`w-full text-left bg-gray-800 ${(hasVoted || isExpired) ? "opacity-70 cursor-default" : "hover:bg-gray-700"} border border-gray-700 hover:border-blue-600 rounded-lg p-3 transition`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{option.optionText}</span>
                      <span className="text-gray-400 text-sm">{option.voteCount ?? 0} {option.voteCount === 1 ? "voto" : "votos"}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${percentage}%` }} />
                    </div>
                    <span className="text-blue-400 text-xs mt-1 block">{percentage}%</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>
              Total de votos: <span className="text-blue-400 font-semibold">{totalVotes}</span>
            </span>
          </div>
          {isExpired && poll.expiresAt && (
            <div className="text-sm text-red-400">
              Enquete expirada em {formatTimeStamp(new Date(poll.expiresAt))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
