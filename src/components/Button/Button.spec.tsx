import React from "react";
import userEvent from "@testing-library/user-event";

import Button from ".";
import { render } from "../../../test-utils/customRender";

describe("Button", () => {
  test("shuod call callback when pressed", async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClick}>Hello Button</Button>
    );
    const button = getByRole("button", { name: "Hello Button" });
    expect(onClick).toBeCalledTimes(0);
    await userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
