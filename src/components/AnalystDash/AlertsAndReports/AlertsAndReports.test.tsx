import { render } from "@testing-library/react";
import AlertsAndReports from "./AlertsAndReports";

it("renders <AlertsAndReports/>", () => {
  const { asFragment } = render(<AlertsAndReports />);
  expect(asFragment()).toMatchSnapshot();
});