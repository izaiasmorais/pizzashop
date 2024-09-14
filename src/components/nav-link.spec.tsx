import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the nav link when the current path matches the link", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("About").dataset.current).toEqual("true");
  });
});
