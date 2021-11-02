module.exports = {
    testRunner: 'jest-circus/runner',
    testRegex: ['/__tests__/.*.spec.js?$'],
    reporters: [
        'default',
        [
            '@reportportal/agent-js-jest',
            {
                token: 'xxx',
                endpoint: 'https://reportportal.apiture.com/api/v1',
                launch: 'REPORTPORTAL_TEST_LAUNCH',
                project: 'default_personal',
                description: 'Testing RP with NX and Jest',
                debug: true,
            }
        ]
    ],
};