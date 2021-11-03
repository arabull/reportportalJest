describe('tests with specific status', () => {
  test('should pass after 5 seconds', (done) => {
    // if this is set to 5000, the first suite has time to finish reporting
    setTimeout(() => done(), 0);
  });
});
