import React from "react";
import TextInput, { useTextInput } from ".";
import userEvent from "@testing-library/user-event";
import { render } from "../../../test-utils/customRender";

describe("Text Input", () => {
  test("should render", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        label="This is a label"
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
      return (
        <TextInput
          label="This is a label"
          placeholder="This is a placeholder"
          {...textInput}
        />
      );
    };
    const { getByRole } = render(<TestComponent />);
    const input = getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "Hello");
    expect(input.value).toBe("Hello");
  });
});
