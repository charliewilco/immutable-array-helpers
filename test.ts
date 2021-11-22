import { describe, it, expect } from "@jest/globals";
import ImmutableArrayHelpers from "./src";

const TEST_ARRAY = [
  {
    id: 1,
    title: "Hello",
  },
];

const Util = new ImmutableArrayHelpers(TEST_ARRAY);

describe("Array Utils", () => {
  it("adds to the array", () => {
    Util.add({ id: 2, title: "No one" });
    const d = Util.data;
    expect(d).toHaveLength(2);
    expect(d[0].title).toBe("No one");
  });

  it("removes from the array", () => {
    Util.remove({ id: 2, title: "No one" });
    const d = Util.data;

    expect(d).toHaveLength(1);
    expect(d[0].title).toBe("Hello");
    expect(d[1]).toBeFalsy();
  });

  it("updates item in the array", () => {
    Util.update({ id: 1, title: "No one" });
    const d = Util.data;

    expect(d[0].title).toBe("No one");
  });
});
