import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return (
      <div className="note-list-empty">
        <p>No notes yet. Add your first note!</p>
      </div>
    );
  }
  
  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      <div className="notes-grid">
        {notes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;