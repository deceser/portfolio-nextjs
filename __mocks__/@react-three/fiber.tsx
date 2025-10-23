import React from 'react';

export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-canvas">{children}</div>
);

export const useFrame = jest.fn();
export const useThree = jest.fn();
