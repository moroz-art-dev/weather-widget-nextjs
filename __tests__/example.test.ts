describe('Basic Test Suite', () => {
  it('should return true when comparing true', () => {
    expect(true).toBe(true);
  });

  it('should return false when comparing true and false', () => {
    expect(true).not.toBe(false);
  });
});
