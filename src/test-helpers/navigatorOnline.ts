const mockOnline = {
  onLine: true,
};

const mockNavigator = {
  value: mockOnline,
  writable: true,
};

Object.defineProperty(window, "navigator", mockNavigator);

export default mockOnline;
