import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  // State for notes array
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage if available
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  
  // State for currently selected note (for editing)
  const [selectedNote, setSelectedNote] = useState(null);
  
  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  // Function to add a new note
  const addNote = (note) => {
    // Create new note with unique ID and timestamp
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      createdAt: new Date().toLocaleString()
    };
    
    setNotes([newNote, ...notes]);
  };
  
  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    // If the deleted note was selected, clear selection
    if (selectedNote && selectedNote.id === id) {
      setSelectedNote(null);
    }
  };
  
  // Function to select a note for editing
  const selectNoteForEdit = (note) => {
    setSelectedNote(note);
  };
  
  // Function to update a note
  const updateNote = (updatedNote) => {
    if (updatedNote === null) {
      setSelectedNote(null);
      return;
    }
    
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setSelectedNote(null);
  };
  
  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <NoteForm 
          addNote={addNote} 
          selectedNote={selectedNote}
          updateNote={updateNote}
        />
        <NoteList 
          notes={notes} 
          onDelete={deleteNote}
          onEdit={selectNoteForEdit}
        />
      </main>
    </div>
  );
}

export default App;