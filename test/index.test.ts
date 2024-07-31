import { test, expect } from "vitest"
import { one, two } from "../src"

test("1 + 2 === 3", () => {
    expect(one + two).toBe(3)
})