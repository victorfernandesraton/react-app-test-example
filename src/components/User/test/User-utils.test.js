import { parseUsername } from "../User-utils";

describe("User-utils", () => {
  describe("parseUsername", () => {
    test("should have firstName, lastName and username", () => {
      const user = {
        first_name: "Victor",
        last_name: "Raton",
        username: "vraton21",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("Victor Raton (vraton21)");
    });
  });
});
