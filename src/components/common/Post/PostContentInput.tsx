type PostContentInputProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function PostContentInput(props: PostContentInputProps) {
    return (
        <textarea
          placeholder="Conteúdo do Post (opcional)"
          rows={8}
          className="w-full py-2 px-4 resize-none
                     border border-gray-600 rounded-2xl"
          {...props}
        />
    );
}