import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text when order status is pending", () => {
    let wrapper = render(<OrderStatus status="pending" />);
    let statusText = wrapper.getByText("Pendente");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text when order status is cancelled", () => {
    let wrapper = render(<OrderStatus status="cancelled" />);
    let statusText = wrapper.getByText("Cancelado");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text when order status is delivered", () => {
    let wrapper = render(<OrderStatus status="delivered" />);
    let statusText = wrapper.getByText("Entregue");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
	});

	it("should display the right text when order status is delivering", () => {
    let wrapper = render(<OrderStatus status="delivering" />);
    let statusText = wrapper.getByText("Em entrega");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
	});

	it("should display the right text when order status is processing", () => {
    let wrapper = render(<OrderStatus status="processing" />);
    let statusText = wrapper.getByText("Em preparo");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});
