import { describe, it, expect } from "@jest/globals";
import { ImmutableArrayHelpers } from "../src";

const TEST_ARRAY = [
	{
		id: 1,
		title: "Hello",
	},
];

const Helper = new ImmutableArrayHelpers(TEST_ARRAY);

describe("Array Utils", () => {
	it("adds to the array", () => {
		Helper.add({ id: 2, title: "No one" });
		const d = Helper.data;
		expect(d).toHaveLength(2);
		expect(d[0].title).toBe("No one");
	});

	it("removes from the array", () => {
		Helper.remove({ id: 2, title: "No one" });
		const d = Helper.data;

		expect(d).toHaveLength(1);
		expect(d[0].title).toBe("Hello");
		expect(d[1]).toBeFalsy();
	});

	it("updates item in the array", () => {
		Helper.update({ id: 1, title: "No one" });
		const d = Helper.data;

		expect(d[0].title).toBe("No one");
	});
});
