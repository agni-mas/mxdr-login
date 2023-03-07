import React from 'react';
import { render, screen } from "@testing-library/react";
import Table from './Table';

xdescribe('<Table />', () => {
  let component;

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
