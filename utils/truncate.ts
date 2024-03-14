export const truncateText = (text: string) => {
  if (text.length < 15) return text;
  return `${text.substring(0, 15)} ...`;
};
