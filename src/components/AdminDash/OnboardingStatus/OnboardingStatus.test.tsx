import React from 'react';
import { render } from "@testing-library/react";
import OnboardingStatus from './OnboardingStatus'


it("renders <OnboardingStatus />", () => {
    const { asFragment } = render(<OnboardingStatus /> );
    expect(asFragment()).toMatchSnapshot();
});
