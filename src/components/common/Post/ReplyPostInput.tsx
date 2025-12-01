import { useState, type Dispatch, type SetStateAction } from "react";
import { commentService } from "../../../services/comment.service";
import type { CommentInfo } from "../../../types/comment.types";

type ReplyPostInputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  postId: number;
  setComments: Dispatch<SetStateAction<CommentInfo[]>>;
};

export default function ReplyPostInput({
  postId,
  setComments,
  ...props
}: ReplyPostInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleCommentCreation(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setIsLoading(true);
      await commentService.createComment(postId, { content });
      setContent("");
      setIsFocused(false);
    } catch (error) {
      console.error("Erro ao criar comentário", error);
    } finally {
      setIsLoading(false);
      const comments = await commentService.getPostComments(postId);
      setComments(comments);
    }
  }

  return (
    <form
      className="flex flex-col border border-gray-600 rounded-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <textarea
        placeholder={!isFocused ? "Junte-se à conversa" : ""}
        rows={isFocused ? 3 : 1}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full py-2 px-4 resize-none outline-none bg-transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!content.trim()) setIsFocused(false);
        }}
        {...props}
      />

      {isFocused && (
        <div className="flex gap-2 self-end py-2 pr-2 mt-2">
          <button
            type="button"
            onClick={() => {
              setContent("");
              setIsFocused(false);
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-2xl 
                       bg-gray-800 hover:bg-gray-700 text-white text-sm
                       transition cursor-pointer"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading || !content.trim()}
            onClick={handleCommentCreation}
            className="flex items-center gap-2 px-3 py-1 rounded-2xl 
                       bg-blue-600 hover:bg-blue-500 disabled:opacity-50 
                       text-white text-sm transition cursor-pointer"
          >
            {isLoading ? "Enviando..." : "Comentar"}
          </button>
        </div>
      )}
    </form>
  );
}
