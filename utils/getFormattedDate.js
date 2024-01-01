export const getFormattedDate = (date) => {
  const inputDate = new Date("2023-12-01T08:00:00");
  const formattedDate = inputDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
