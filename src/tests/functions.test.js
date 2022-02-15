import { timesTwo } from '../functions'

describe("Intro to testing with Jest!", () => {
  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });
});
