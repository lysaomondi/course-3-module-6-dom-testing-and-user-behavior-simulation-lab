// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// ==========================
// Step 4: Reusable Utilities
// ==========================

// Utility to create elements dynamically
// ==========================
// DOM Utility Functions
// ==========================

function addElementToDOM(id, text) {
  const container = document.getElementById(id);
  if (!container) return;

  const p = document.createElement("p");
  p.textContent = text;
  container.appendChild(p);
}

function removeElementFromDOM(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

function simulateClick(id, text) {
  const element = document.getElementById(id);
  if (!element) return;

  element.textContent = text;
}

// ==========================
// DOM Manipulation Handlers
// ==========================

function handleButtonClick() {
  const output = document.getElementById("dynamic-content");
  output.textContent = "Button Clicked!";
}

// FIXED: safe event handling (prevents Jest crash)
function handleFormSubmit(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  const input = document.getElementById("user-input");
  const error = document.getElementById("error-message");
  const output = document.getElementById("dynamic-content");

  if (!input.value.trim()) {
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  output.textContent = "You entered: " + input.value;
}


// ==========================
// Event Listeners Setup
// ==========================

function setupEventListeners() {
  const button = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");

  if (button) {
    button.addEventListener("click", handleButtonClick);
  }

  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
}

// Auto-init in browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// ==========================
// EXPORTS (for Jest testing)
// ==========================

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleButtonClick,
  handleFormSubmit,
  setupEventListeners,
};