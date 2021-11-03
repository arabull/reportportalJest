describe('tests with specific status', () => {
  test('should pass after 2 seconds', (done) => {
    // if this is set to 2000, the first suite has time to finish reporting
    setTimeout(() => {
      done();
    }, 0);
  });
});
