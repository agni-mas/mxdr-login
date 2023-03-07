import { render } from "@testing-library/react";
import GridItem from "./GridItem";

it("renders <GridItem/>", () => {
    const props = {
        children: <div>Some Chart Component</div>,
        title: 'Hello world'
    }
    const { asFragment } = render(<GridItem children={props.children} title={props.title} />);
    expect(asFragment()).toMatchSnapshot();
});