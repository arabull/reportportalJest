//
// A simple application that shows how Node will not wait for async routines
// to complete before exiting if process.exit() is called explicitly. If it is
// not called explicitly, Node will wait on all async routines to complete
// before it exits, even if the main routine is done.
//
// To test, just comment out the scenario below that you don't want to test.
//

const go = async () => {
  return setTimeout(() => {
    console.log('Async routine done.');
    return 0;
  }, 2000);
};

console.log('Main routine done.');

// scenario 1 (Nx jest runner): exits before async process can finish
// process.exit(go());

// scenario 2: (Jest command line runner) doesn't exit until async process finishes
go();
