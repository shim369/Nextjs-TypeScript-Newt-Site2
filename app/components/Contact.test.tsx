import "@testing-library/jest-dom"
import { validateEmail } from "./Contact";

describe("Test Contact Component", () => {

    test("should be failed on email validation", () => {
        const testEmail = "shim.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });

    test("should be successed on email validation", () => {
        const testEmail = "shim@gmail.com";
        expect(validateEmail(testEmail)).toBe(true);
    });
})