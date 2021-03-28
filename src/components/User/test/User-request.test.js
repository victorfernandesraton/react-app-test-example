import { getUser } from "../User-request";

jest.mock("../User-request");

describe("User-request", () => {
  describe("getUser", () => {
    test("should be have user", async () => {
      const response = await getUser("paulo");
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("login", "paulo");
      expect(response.data).toHaveProperty("name", "Victor Raton");
    });
    test("shoud be not found user", async () => {
      try {
        const response = await getUser("pedro2");
      } catch (error) {
        expect(error?.data?.message).toEqual("Not Found");
      }
    });
  });
});
