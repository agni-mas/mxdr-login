import React from 'react';
import { render, screen } from "@testing-library/react";
// import LookerAuth from './LookerAuth';


xdescribe('<LookerAuth />', () => {
  let component;

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
