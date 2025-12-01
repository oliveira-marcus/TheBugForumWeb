import Select from "../Select";

interface CategorySelectProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function CategorySelect({
  id,
  value,
  onChange,
  className = "",
}: CategorySelectProps) {
  const options = [
    {
      value: "General",
      label: "General",
    },
    {
      value: "Events",
      label: "Events",
    },
    {
      value: "Finances",
      label: "Finances",
    },
    {
      value: "Sports",
      label: "Sports",
    },
  ];

  return (
    <Select
      options={options}
      placeholder="Selecione uma comunidade"
      id={id}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
