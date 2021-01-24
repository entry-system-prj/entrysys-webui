import validator from "validator";

export const rules = {
  isRequired(value: string) {
    if (!validator.isEmpty(value)) {
      return true;
    }
    return "この値は必須です";
  },

  isEmail(value: string) {
    if (validator.isEmail(value)) {
      return true;
    }
    return "Emailバリデーションエラーです";
  }
};
