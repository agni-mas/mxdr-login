import React from 'react';
import { render } from "@testing-library/react";
import AdminDash from './AdminDash';


it("renders <AdminDash />", () => {
  const { asFragment } = render(<AdminDash />);
  expect(asFragment()).toMatchSnapshot();
});
