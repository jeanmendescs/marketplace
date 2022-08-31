import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "App";

export const renderRoute = (route) => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};
