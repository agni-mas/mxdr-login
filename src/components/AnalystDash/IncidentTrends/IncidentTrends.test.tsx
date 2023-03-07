import { render } from "@testing-library/react";
import IncidentTrends from "./IncidentTrends";

it("renders <IncidentTrends/>", () => {
    const { asFragment } = render(<IncidentTrends />);
    expect(asFragment()).toMatchSnapshot();
});