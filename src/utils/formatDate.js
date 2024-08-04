export const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  const date = new Date(year, month - 1, day);

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let formattedDate = formatter.format(date);
  formattedDate = formattedDate.replace(/ г\.$/, "");

  return formattedDate;
};
