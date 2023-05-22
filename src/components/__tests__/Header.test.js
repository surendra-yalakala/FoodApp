import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
  );
});
test("Cart should have 0 items on rendering header", () => {
  // cart header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo loaded
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0 items");
});
