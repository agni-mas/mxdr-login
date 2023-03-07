import { render } from "@testing-library/react";
import ServiceActivity from "./ServiceActivity";

it("renders <ServiceActivity/>", () => {
  const { asFragment } = render(<ServiceActivity />);
  expect(asFragment()).toMatchSnapshot();
});