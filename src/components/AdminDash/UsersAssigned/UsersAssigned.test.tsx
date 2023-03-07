import React from 'react';
import { render } from "@testing-library/react";
import UsersAssigned from './UsersAssigned';


it("renders <UsersAssigned />", () => {
    const { asFragment } = render(<UsersAssigned /> );
    expect(asFragment()).toMatchSnapshot();
});
