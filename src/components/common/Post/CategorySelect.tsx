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
      label: "Geral",
    },
    {
      value: "Events",
      label: "Eventos",
    },
    {
      value: "Finances",
      label: "Finanças",
    },
    {
      value: "Sports",
      label: "Esportes",
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
