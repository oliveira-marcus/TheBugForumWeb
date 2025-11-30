import { useState } from "react";

type ReplyPostInputProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function ReplyPostInput(props: ReplyPostInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col border border-gray-600 rounded-2xl">
      <form>
        <textarea
          placeholder={isFocused ? "" : "Junte-se à conversa"}
          rows={isFocused ? 3 : 1}
          className="w-full py-2 px-4 resize-none outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsFocused(false);
            }
          }}
          {...props}
        />
      </form>

      {isFocused && (
        <div className="flex gap-2 self-end py-2 pr-2 mt-2">
          <button
            type="button"
            onClick={() => setIsFocused(false)}
            className="flex items-center gap-2 px-3 py-1 rounded-2xl 
                       bg-gray-800 hover:bg-gray-700 text-white text-sm
                       transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-3 py-1 rounded-2xl 
                       bg-blue-600 hover:bg-blue-500 text-white text-sm
                       transition cursor-pointer"
          >
            Comentar
          </button>
        </div>
      )}
    </div>
  );
}
