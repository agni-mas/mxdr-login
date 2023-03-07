import React from 'react';
import { render } from "@testing-library/react";
import AssetTrends from './AssetTrends';


it("renders <AssetTrends />", () => {
    const { asFragment } = render(<AssetTrends /> );
    expect(asFragment()).toMatchSnapshot();
});