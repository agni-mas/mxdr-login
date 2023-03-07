import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

it("renders <Dashboard/>", () => {
    const props = {
        children: <div>Some Chart Component</div>,
        name: 'Alex'
    }

    const { asFragment } = render(<Dashboard children={props.children} name={props.name} />);
    expect(asFragment()).toMatchSnapshot();
});