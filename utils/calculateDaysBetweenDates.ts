export function calculateDaysBetweenDates(date: string): number {
  const date3 = new Date();
  const date2 = new Date(
    date3.getFullYear(),
    date3.getMonth(),
    date3.getDate()
  );
  const date1 = new Date(date);
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());

  const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  return daysDifference;
}
