import React from "react";
import { render, screen } from "@testing-library/react";
import ServiceSummary from "./ServiceSummary";

xit("renders Service Summary component", () => {
 const { asFragment } = render(<ServiceSummary />);
 expect(asFragment()).toMatchSnapshot();
});
