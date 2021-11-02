module.exports = {
  testRunner: 'jest-circus/runner',
  testRegex: ['./tests/.*.spec.js?$'],
  reporters: [
    'default',
    [
      '@reportportal/agent-js-jest',
      {
        token: 'xxx',
        endpoint: 'https://reportportal.apiture.com/api/v1',
        launch: 'TINY_REPO_LAUNCH_TESTING',
        project: 'default_personal',
        description: 'Testing RP with NX and Jest',
        debug: true,
      },
    ],
  ],
};
