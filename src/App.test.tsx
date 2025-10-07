import { adding } from "./utils/util";
import { describe, it, expect } from "vitest";
describe("Addition Function", () => {
  it("should add two numbers correctly", () => {
    expect(adding("2, 3")).toBe(5);
  });

  it("should add empty value", () => {
    expect(adding("")).toBe(0);
  });

  it("should add new line", () => {
    expect(adding("1\n2,3,4")).toBe(10);
  });

  it("should add different delimiters (,) ", () => {
    expect(adding("//;\n1;2")).toBe(3);
  });
  it("should add different delimiters (-) ", () => {
    expect(adding("//-\n1-6")).toBe(7);
  });
  it("should add different delimiters (.) ", () => {
    expect(adding("//.\n1.2")).toBe(0);
  });
  it("should add different delimiters (%) ", () => {
    expect(adding("//%\n1%2%3.5")).toBe(6.5);
  });
  it("throws error for negative numbers", () => {
    expect(() => adding("1,-2,3")).toThrow("negative numbers not allowed -2");
  });
});
