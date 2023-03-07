import { render } from "@testing-library/react";
import Container from "./Container";

xit("renders <Container/>", () => {
    const props = {
        children: <div>Some Chart Component</div>,
    }

    const { asFragment } = render(<Container children={props.children} />);
    expect(asFragment()).toMatchSnapshot();
});