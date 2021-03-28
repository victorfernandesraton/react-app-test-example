import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserCardviewContainer from "../UserCardviewContainer";

let container = null;

jest.mock("../../User/User-request");

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe("UserCard", () => {
  describe("UserCardViewContainer", () => {
    test("should be a user with name", async () => {
      // Usar a versão assíncrona de act para aplicar Promises resolvidas
      await act(async () => {
        render(<UserCardviewContainer />, container);
      });

      expect(container.querySelector("h1").textContent).toBe(
        "Victor Raton (victorfernandesraton2)"
      );
      expect(container.querySelector("img").alt).toBe("victorfernandesraton2");
    });
  });
});
