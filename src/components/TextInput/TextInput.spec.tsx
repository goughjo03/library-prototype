import React from "react";
import { render } from "@testing-library/react";
import TextInput, { useTextInput } from ".";
import userEvent from "@testing-library/user-event";

describe("Text Input", () => {
  test("should render", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder="This is a placeholder"
        onChange={() => {}}
        value={""}
      />
    );
    getByPlaceholderText("This is a placeholder");
  });
  test("should work with useTextInput hook", async () => {
    const TestComponent = () => {
      const textInput = useTextInput("");
      return <TextInput placeholder="This is a placeholder" {...textInput} />;
    };
    const { getByRole } = render(<TestComponent />);
    const input = getByRole("textbox");
    await userEvent.type(input, "Hello");
  });
});
