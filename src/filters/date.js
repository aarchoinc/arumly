export default (value) => {
  const date = new Date(value);
  return date.toLocaleString(["en-US"], {
    // month: 'short',
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
