import { add, getData } from "./helper";

describe("add function", () => {
  it("3 + 4", () => {
    expect(add(3, 4)).toBe(7);
  });

  it("string parameters", () => {
    expect(add("3", "4")).toBe(7);
  });

  it("a is undefined", () => {
    expect(add(3)).toBe(3);
  });

  it("addition with float numbers", () => {
    expect(add(1.2, 1.8)).toBe(3);
  });

  it("should return 0 when string literal supplied", () => {
    expect(add("two", "three")).toBe(0);
  });
});

describe("Async function tset", () => {
  test("testing of async function", () => {
    return getData()
      .then(res => {
        expect(res).toBe(111);
      })
      .catch(err => {
        expect(err).toBe(12);
      });
  });
});
