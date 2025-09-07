// Simple Counter Application Logic
// Persistence key for localStorage
const STORAGE_KEY = "simpleCounterValue";

/**
 * Load the stored count from localStorage.
 * Returns an integer >= 0. If the value is missing or invalid, defaults to 0.
 */
function loadCount() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const parsed = parseInt(stored, 10);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Save the provided count value to localStorage.
 * @param {number} value - The count to persist.
 */
function saveCount(value) {
  // Ensure we store a string representation.
  localStorage.setItem(STORAGE_KEY, String(value));
}

/**
 * Update the visual display of the count.
 * @param {number} value - The value to show.
 */
function updateDisplay(value) {
  const displayEl = document.getElementById("countDisplay");
  if (displayEl) {
    displayEl.textContent = String(value);
  }
}

// Initialise the counter from storage and reflect it in the UI.
let count = loadCount();
updateDisplay(count);

/** Increment the counter, persist and update UI. */
function increment() {
  count += 1;
  saveCount(count);
  updateDisplay(count);
}
/** Decrement the counter, persist and update UI. */
function decrement() {
  count -= 1;
  saveCount(count);
  updateDisplay(count);
}
/** Reset the counter to zero, persist and update UI. */
function reset() {
  count = 0;
  saveCount(count);
  updateDisplay(count);
}

// Attach event listeners to buttons once the DOM is ready.
// Since the script is loaded with `defer`, the DOM is already parsed.
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
if (incBtn) incBtn.addEventListener("click", increment);
if (decBtn) decBtn.addEventListener("click", decrement);
if (resetBtn) resetBtn.addEventListener("click", reset);

// Expose functions globally for testing or external usage.
window.loadCount = loadCount;
window.saveCount = saveCount;
window.updateDisplay = updateDisplay;
window.increment = increment;
window.decrement = decrement;
window.reset = reset;
