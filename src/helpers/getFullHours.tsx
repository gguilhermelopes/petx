const getFullHours = (start: number, end: number) => {
  const fullHours = [];
  for (let i = start; i <= end; i++) {
    fullHours.push(`${i}:00`);
  }
  return fullHours;
};

export default getFullHours;
