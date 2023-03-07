import React from 'react';
import { render } from "@testing-library/react";
import Entitlements from './Entitlements';


it("renders <Entitlements />", () => {
    const { asFragment } = render(<Entitlements /> );
    expect(asFragment()).toMatchSnapshot();
});
