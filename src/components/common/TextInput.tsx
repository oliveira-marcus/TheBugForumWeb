type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className="w-full py-2 px-4 resize-none
                     border border-gray-600 rounded-2xl"
      type="text"
      {...props}
    />
  );
}
