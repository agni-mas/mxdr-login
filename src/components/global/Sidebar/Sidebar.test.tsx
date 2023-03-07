import React from 'react';
import { render, screen } from "@testing-library/react";
import Sidebar from './Sidebar';
import { BrowserRouter } from "react-router-dom";


xit("renders <Sidebar/>", () => {
    const { asFragment } = render(<Sidebar />, {wrapper: BrowserRouter} );
    expect(asFragment()).toMatchSnapshot();
});