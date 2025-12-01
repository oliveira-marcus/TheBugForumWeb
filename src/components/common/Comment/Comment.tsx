import { useState } from "react";
import type { CommentInfo } from "../../../types/comment.types";
import { formatTimeStamp } from "../../../utils/datetime";
import CommentActions from "./CommentActions";
import CommentMeta from "./CommentMeta";
import ReplyCommentInput from "./ReplyCommentInput"; // ← IMPORT HERE

interface CommentProps {
  comment: CommentInfo;
  postId: number;
  setComments: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
}

function Replies({
  replies,
  postId,
  setComments,
}: {
  replies: CommentInfo[];
  postId: number;
  setComments: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
}) {
  return (
    <div className="ml-4 mt-2 border-l border-gray-700 pl-4">
      {replies.map((r) => (
        <Comment
          key={r.id}
          comment={r}
          postId={postId}
          setComments={setComments}
        />
      ))}
    </div>
  );
}

export default function Comment({ comment, postId, setComments }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className="mb-4">
      <CommentMeta
        author={comment.user.username}
        timestamp={formatTimeStamp(new Date(comment.createdAt))}
      />

      <p className="text-gray-300 mt-1">{comment.content}</p>

      <CommentActions
        votes={comment.upvotes - comment.downvotes}
        onReply={() => setIsReplying(true)} // ← ENABLE BUTTON
      />

      {isReplying && (
        <ReplyCommentInput
          postId={postId}
          parentCommentId={comment.id}
          setComments={setComments}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {comment.replies?.length > 0 && (
        <Replies replies={comment.replies} postId={postId} setComments={setComments} />
      )}
    </div>
  );
}
