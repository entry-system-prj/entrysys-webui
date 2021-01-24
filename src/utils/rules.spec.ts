import { rules } from "./rules";

describe("test isRequired", () => {
  test("isRequired true", () => {
    expect(rules.isRequired("Hello")).toBe(true);
  });

  test("isRequired false", () => {
    expect(rules.isRequired("")).toEqual("この値は必須です");
  });
});

describe("test isEmail", () => {
  test("isEmail true", () => {
    expect(rules.isEmail("email@example.com")).toBe(true);
  });

  test("isEmail false", () => {
    expect(rules.isEmail("")).toEqual("Emailバリデーションエラーです");
    expect(rules.isEmail("email")).toEqual("Emailバリデーションエラーです");
    expect(rules.isEmail("email@")).toEqual("Emailバリデーションエラーです");
    expect(rules.isEmail("email@example")).toEqual(
      "Emailバリデーションエラーです"
    );
    expect(rules.isEmail("@")).toEqual("Emailバリデーションエラーです");
    expect(rules.isEmail("@example.com")).toEqual(
      "Emailバリデーションエラーです"
    );
  });
});
