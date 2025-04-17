/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */
function recurringTimer(message, interval) {
  // Set up a recurring timer
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return the timer ID for stopping the timer later
  return timerId;
}

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
  clearInterval(timerId);
  console.log("Timer stopped.");
}

// Example usage
const timerId = recurringTimer("Hello, world!", 1000); // Logs "Hello, world!" every second

// Stop the timer after 5 seconds
setTimeout(() => {
  stopRecurringTimer(timerId);
}, 5000);

