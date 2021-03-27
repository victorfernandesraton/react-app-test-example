import { parseUsername } from "../User-utils";

describe("User-utils", () => {
  describe("parseUsername", () => {
    test("should have firstName, lastName and username", () => {
      const user = {
        first_name: "Victor",
        last_name: "Baiao",
        username: "vraton21",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("Victor Baiao (vraton21)");
    });

    test("should have firstname, lastname, usrname and lstname have more than 8 characters", () => {
      const user = {
        first_name: "Victor",
        last_name: "Fernandes",
        username: "vraton21",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("Victor F. (vraton21)");
    });

    test("shoud have only username", () => {
      const user = {
        username: "jeanJesus21",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("jeanJesus21");
      expect(user).not.toBe("(");
      expect(user).not.toBe(")");
    });

    test("should have only lastname", () => {
      const user = {
        last_name: "Raton",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("Raton");
    });
    test("should have only lastname and its have more than 8 characters", () => {
      const user = {
        last_name: "Fernandes",
      };
      const result = parseUsername(user);
      expect(result).toStrictEqual("F.");
    });
  });
});
