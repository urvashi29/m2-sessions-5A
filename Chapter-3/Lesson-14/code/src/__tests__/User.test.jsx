import {
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import User from "../pages/User";

it("expected user api data", async () => {
  render(<User />);
  await waitFor(() => {
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });
});
