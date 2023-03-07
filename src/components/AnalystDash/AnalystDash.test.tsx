import { render } from "@testing-library/react";
import AnalystDash from "./AnalystDash";

it("renders <AnalystDash/>", () => {
  const { asFragment } = render(<AnalystDash />);
  expect(asFragment()).toMatchSnapshot();
});
