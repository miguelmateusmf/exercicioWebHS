import { calculateDaysBetweenDates } from "./calculateDaysBetweenDates";

describe("calculateDaysBetweenDates", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should return the correct number of days between two dates", () => {
    const baseTime = new Date("2023/08/20").getTime();
    jest.setSystemTime(baseTime);

    const date1 = "2023/08/24";
    const daysDifference = calculateDaysBetweenDates(date1);

    expect(daysDifference).toEqual(4);
  });

  it("should return 0 for the same date", () => {
    const baseTime = new Date("2023/08/24").getTime();
    jest.setSystemTime(baseTime);

    const date1 = "2023/08/24";
    const daysDifference = calculateDaysBetweenDates(date1);

    expect(daysDifference).toEqual(0);
  });
});
