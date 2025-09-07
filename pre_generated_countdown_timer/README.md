# Project Title

A simple web-based counter application that allows users to increment, decrement, and reset a count. The count is displayed prominently, adapts to different screen sizes, and persists across page reloads using **localStorage**.

---

## Tech Stack

- **HTML** – Structure of the web page.
- **CSS** – Styling and responsive layout.
- **JavaScript** – Interactivity, button handling, and persistence with `localStorage`.

---

## Features

- **Display** – Shows the current count in a large, centered font.
- **Increment** – `+` button increases the count by 1.
- **Decrement** – `-` button decreases the count by 1.
- **Reset** – `Reset` button returns the count to 0.
- **Responsive Layout** – Works on mobile, tablet, and desktop screens.
- **LocalStorage Persistence** – The count value is saved in the browser, so it survives page reloads and browser restarts.

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Open the application**
   - Simply double‑click `index.html` or open it in any modern web browser.
   - *(Optional)* For a local development server, you can run:
     ```bash
     # Using Python 3
     python -m http.server 8000
     # Then open http://localhost:8000 in your browser
     ```

---

## Usage

- The UI consists of a large number representing the current count and three buttons:
  - **`+`** – Increments the count.
  - **`-`** – Decrements the count.
  - **`Reset`** – Sets the count back to 0.
- Each click updates the displayed value instantly.
- The current count is stored in `localStorage`; therefore, when you close the tab or reload the page, the last count is restored automatically.

---

## Folder Structure

```
project-root/
├── index.html        # Main HTML file
├── styles.css        # CSS for layout and styling
├── script.js         # JavaScript logic (buttons, persistence)
└── README.md         # Documentation (this file)
```

---

## License

[Insert license information here – e.g., MIT License]
