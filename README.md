

# Reportportal Example with Jest, NX, and NRWL/Jest

This project was generated using [Nx](https://nx.dev).

You can reproduce the two scenarios with the following commands:

$nx run testing:smoke-test
$nx run testing:smoke-test-2

Before running these two commands you'll need to update the jest.config.js file in the root. 
Replace the token placeholder value 'xxx' with the actual token. I did not include it here since I plan to use this repo for opening a bug ticket with a third party

Note that in the config for the reporter the debug parameter is set to true. This shows the logging for when launches, test items, etc are started/ended with reportportal api

When running the commands you'll notice that the smoke-test-2 shows a lot of start/finishes for launches and test items. 
The first one however only shows the start of the launch, and no other results are sent. This is also reflected in reportportal.

Its worth noting that when going through @nrwl/jest, that the launch never finishes and the results for the last spec in the suite are also never sent.
If there is only one spec, then you only see a start launch log and nothing else. If there are multiple tests, then you'll see each spec result sent and stored in reportportal except for the last. 
In both cases, the launch shows as still running. 