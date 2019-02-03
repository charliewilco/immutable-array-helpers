import ImmutableArrayHelpers from "../src";

const TEST_ARRAY = [
  {
    id: 1,
    title: "Hello"
  }
];

const Util = new ImmutableArrayHelpers(TEST_ARRAY);

describe("Array Utils", () => {
  it("adds to the array", () => {
    const d = Util.add({ id: 2, title: "No one" });

    expect(d).toHaveLength(2);
  });

  it("removes from the array", () => {
    const d = Util.remove({ id: 2, title: "No one" });

    expect(d).toHaveLength(1);
    expect(d[0].title).toBe("Hello");
  });

  it("updates item in the array", () => {
    const d = Util.update({ id: 1, title: "No one" });

    expect(d[0].title).toBe("No one");
  });
});
