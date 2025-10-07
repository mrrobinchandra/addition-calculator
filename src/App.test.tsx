import { adding } from "./utils/util";
import { describe, it, expect } from "vitest";
describe("Addition Function", () => {
  it("should add two numbers correctly", () => {
    expect(adding("2, 3")).toBe(5);
  });

  it("should add empty value", () => {
    expect(adding("")).toBe(0);
  });
});
