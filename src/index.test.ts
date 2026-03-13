import { describe, expect, it } from "vitest";
import {
  ATOMIC_INCREMENT_WITH_LIMIT_SCRIPT,
  parseIncrementResult,
} from "./index";
import type { IncrementResult } from "./index";

describe("package entrypoint", () => {
  it("exports increment helpers from the root module", () => {
    const parsed: IncrementResult = parseIncrementResult("2");

    expect(parsed).toBe(2);
    expect(typeof ATOMIC_INCREMENT_WITH_LIMIT_SCRIPT).toBe("string");
    expect(ATOMIC_INCREMENT_WITH_LIMIT_SCRIPT.length).toBeGreaterThan(0);
  });
});
