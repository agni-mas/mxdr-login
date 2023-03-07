import { render } from "@testing-library/react";
import Grid from "./Grid";

it("renders <Grid/>", () => {
    const props = {
        children: <div>Children</div>
    }
    const { asFragment } = render(<Grid children={props.children} />);
    expect(asFragment()).toMatchSnapshot();
});