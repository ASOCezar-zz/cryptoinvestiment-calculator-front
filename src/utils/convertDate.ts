export default function convertDate(date: string) {
  const data = new Date(date).getTime();
  return new Date(data).toLocaleString();
}
