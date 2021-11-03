module.exports = {
  testRunner: 'jest-circus/runner',
  testRegex: ['./tests/.*.spec.js?$'],
  testSequencer: './src/tests/sequencer.js',
  reporters: ['./src/reporters/custom-reporter'],
};
