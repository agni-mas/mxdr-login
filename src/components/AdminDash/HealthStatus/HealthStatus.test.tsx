import React from 'react';
import { render } from "@testing-library/react";
import HealthStatus from './HealthStatus';


it("renders <HealthStatus />", () => {
    const { asFragment } = render(<HealthStatus /> );
    expect(asFragment()).toMatchSnapshot();
});
