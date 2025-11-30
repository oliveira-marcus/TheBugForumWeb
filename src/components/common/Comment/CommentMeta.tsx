export default function CommentMeta({
  author,
  timestamp,
}: {
  author: string;
  timestamp: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
      <span>
        <span className="text-blue-400">u/{author}</span>
      </span>
      <span>•</span>
      <span>{timestamp}</span>
    </div>
  );
}
