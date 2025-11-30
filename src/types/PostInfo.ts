export interface PostInfo {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  votes: number;
  comments: number;
  timestamp: string;
  isPinned?: boolean;
}
