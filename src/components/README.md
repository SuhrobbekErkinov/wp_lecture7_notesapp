# 📁 Components - Notes App

This folder contains reusable React components for the Notes App. Each component plays a specific role in managing and displaying notes.

---

## 📌 Components Overview

### 🏷️ `Header.js`
- Displays the title of the Notes App.
- Can include additional controls (e.g., theme toggle, settings).

### 📝 `NoteForm.js`
- Handles creating and editing notes.
- Contains a form with input fields for the note title and content.
- Calls a function to save the note.

### 🗂️ `NoteList.js`
- Displays a list of notes.
- Maps through an array of notes and renders `NoteItem.js` for each.

### 📝 `NoteItem.js`
- Represents a single note.
- Displays the note's title and a short preview.
- Includes action buttons (`Edit`, `Delete`, `See More`).
- Expands to show full content when clicked.

### 🔲 `Modal.js`
- A reusable modal component.
- Used for displaying a note in full or editing its content.

---

## 🛠️ How to Add a New Component
1. Create a new component file in the `components/` folder.
2. Implement the component logic.
3. Import and use the component in relevant files.

---

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Add or modify components.
4. Submit a pull request with a clear description of your changes.

---
