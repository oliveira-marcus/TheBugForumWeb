type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  id?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  id,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}: SelectProps) {
  return (
    <div className={`relative inline-block w-full max-w-xs ${className}`}>
      <select
        id={id}
        value={value ?? ""}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        className={`appearance-none w-full px-3 py-2 rounded-lg bg-gray-700 cursor-pointer 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
          transition pr-10 disabled:opacity-60 disabled:cursor-not-allowed`}
        aria-label={id ?? "select"}
      >
        {/* placeholder as empty option */}
        <option value="" disabled={!!placeholder} hidden={!!placeholder} className="cursor-pointer">
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value} >
            {opt.label}
          </option>
        ))}
      </select>

      {/* arrow icon on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.7-.3l-3-3a1 1 0 111.4-1.4L10 9.6l2.3-2.3a1 1 0 011.4 1.4l-3 3A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
