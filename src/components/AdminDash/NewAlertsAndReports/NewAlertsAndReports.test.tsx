import React from 'react';
import { render } from "@testing-library/react";
import NewAlertsAndReports from './NewAlertsAndReports';


it("renders <NewAlertsAndReports />", () => {
    const { asFragment } = render(<NewAlertsAndReports /> );
    expect(asFragment()).toMatchSnapshot();
});
