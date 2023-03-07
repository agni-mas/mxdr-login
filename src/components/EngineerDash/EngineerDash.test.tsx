import React from 'react';
import { render } from "@testing-library/react";
import EngineerDash from './EngineerDash';


it("renders <EngineerDash />", () => {
  const { asFragment } = render(<EngineerDash />);
  expect(asFragment()).toMatchSnapshot();
});
