export function formatTimeStamp(date: Date) {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short", // or 'medium', 'long'
    timeStyle: "short", // remove if you only want the date
  }).format(date);
}
