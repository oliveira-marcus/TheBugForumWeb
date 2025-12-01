import { useState } from "react";
import { commentService } from "../../../services/comment.service";
import type { CommentInfo } from "../../../types/comment.types";

type ReplyCommentInputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  postId: number;
  parentCommentId: number;
  setComments: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
  onCancel: () => void;
};

export default function ReplyCommentInput({
  postId,
  parentCommentId,
  setComments,
  onCancel,
  ...props
}: ReplyCommentInputProps) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setIsLoading(true);
      await commentService.createComment(postId, {
        content,
        parentCommentId: parentCommentId,
      });

      const updatedComments = await commentService.getPostComments(postId);
      setComments(updatedComments);

      setContent("");
      onCancel();
    } catch (err) {
      console.error("Erro ao responder comentário", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-2 ml-8">
      <textarea
        rows={3}
        value={content}
        placeholder="Escreva sua resposta..."
        onChange={(e) => setContent(e.target.value)}
        className="w-full py-2 px-4 rounded-lg resize-none bg-transparent outline-none border border-gray-600"
        {...props}
      />

      <div className="flex justify-end gap-2 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading || !content.trim()}
          onClick={handleSubmit}
          className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition"
        >
          {isLoading ? "Enviando..." : "Responder"}
        </button>
      </div>
    </form>
  );
}
