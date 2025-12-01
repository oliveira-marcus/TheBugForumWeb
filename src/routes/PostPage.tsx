import { useEffect, useState } from "react";
import Comment from "../components/common/Comment/Comment";
import PostActions from "../components/common/Post/PostActionst";
import PostMeta from "../components/common/Post/PostMeta";
import ReplyPostInput from "../components/common/Post/ReplyPostInput";
import type { CommentInfo } from "../types/comment.types";
import { formatTimeStamp } from "../utils/datetime";
import type { PostInfo } from "../types/post.types";
import { postService } from "../services/post.service";
import { commentService } from "../services/comment.service";
import { useParams } from "react-router";

export default function PostPage() {
  const [post, setPost] = useState<PostInfo | null>(null);
  const [comments, setComments] = useState<CommentInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    if (!postId) {
      setError("Post ID inválido.");
      setIsLoading(false);
      return;
    }

    const postIdParsed = parseInt(postId);

    const fetchData = async () => {
      try {
        const [postData, commentsData] = await Promise.all([
          postService.getPostById(postIdParsed),
          commentService.getPostComments(postIdParsed),
        ]);

        setPost(postData ?? null);
        setComments(commentsData ?? []);
      } catch (err) {
        setError("Erro ao carregar o post.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (isLoading) {
    return <div className="text-center py-6">Carregando...</div>;
  }

  if (error || !post) {
    return (
      <main className="lg:col-span-9 space-y-4">
        <div className="text-center py-6 text-red-400">
          {error ?? "Post não encontrado"}
        </div>
      </main>
    );
  }

  return (
    <main className="lg:col-span-9 space-y-4">
      <PostMeta
        author={post.user.username}
        category={post.category}
        timestamp={formatTimeStamp(new Date(post.createdAt))}
      />

      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-300">{post.content}</p>

      <PostActions
        commentsCount={comments.length}
        votes={post.upvotes - post.downvotes}
      />

      <ReplyPostInput postId={parseInt(postId!)} setComments={setComments} />

      {comments.map((c) => (
        <Comment key={c.id} postId={parseInt(postId!)} comment={c} setComments={setComments} />
      ))}
    </main>
  );
}
