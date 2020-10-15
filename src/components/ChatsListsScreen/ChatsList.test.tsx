import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import ChatsList from "./ChatsList";

describe("ChatsList", () => {
  afterEach(cleanup);

  it("renders fetched chats data", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: {
          chats: [
            {
              id: 1,
              name: "Jeanne Doe",
              picture: "https://localhost:4000/picture.jpg",
              lastMessage: {
                id: 1,
                content: "Hi there!",
                createdAt: new Date("15 october 2020 GMT")
              }
            }
          ]
        }
      })
    );

    {
      const { container, getByTestId } = render(<ChatsList />);
      
      await waitFor(() => container);
      
      expect(getByTestId("name")).toHaveTextContent("Jeanne Doe");
      expect(getByTestId("picture")).toHaveAttribute(
        "src",
        "https://localhost:4000/picture.jpg"
      );
      expect(getByTestId("content")).toHaveTextContent("Hi there!");
      expect(getByTestId("date")).toHaveTextContent("02:00");
    }
  });
});
