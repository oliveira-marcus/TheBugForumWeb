export interface CommentInfo {
  id: number;
  postId: number;
  userId: number;
  content: string;
  upvotes: number;
  downvotes: number;
  parentCommentId: number | null;
  createdAt: string;
  user: {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
  };
  _count: {
    replies: number;
  };
  replies: CommentInfo[];
  hasMoreReplies: boolean;
}
