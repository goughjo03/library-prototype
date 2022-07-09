import { render, RenderOptions, RenderResult } from "@testing-library/react";
import React, { FC, PropsWithChildren, StrictMode } from "react";

interface WrapperProps {}

export const wrapper: FC<PropsWithChildren<WrapperProps>> = ({ children }) => {
  return <StrictMode>{children}</StrictMode>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions<any>, "queries"> | undefined
): RenderResult => {
  return render(ui, {
    wrapper: ({ children }) => wrapper({ children }),
    ...options,
  });
};

export { customRender as render };
