import React from 'react';
import { render } from "@testing-library/react";
import EscalationContacts from './EscalationContacts';


it("renders <EscalationContacts />", () => {
    const { asFragment } = render(<EscalationContacts /> );
    expect(asFragment()).toMatchSnapshot();
});
