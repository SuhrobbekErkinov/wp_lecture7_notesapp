import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, selectedNote, updateNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  // When selectedNote changes, update form state
  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setIsEditing(true);
    } else {
      setTitle('');
      setContent('');
      setIsEditing(false);
    }
  }, [selectedNote]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!title.trim() || !content.trim()) {
      alert('Please enter both title and content');
      return;
    }
    
    if (isEditing) {
      // Update existing note
      updateNote({
        ...selectedNote,
        title,
        content,
        updatedAt: new Date().toLocaleString()
      });
    } else {
      // Add new note
      addNote({ title, content });
    }
    
    // Clear form
    setTitle('');
    setContent('');
  };
  
  const handleCancel = () => {
    setTitle('');
    setContent('');
    setIsEditing(false);
    updateNote(null);
  };
  
  return (
    <div className="note-form-container">
      <h2>{isEditing ? 'Edit Note' : 'Add New Note'}</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter note content"
            rows="6"
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Note' : 'Add Note'}
          </button>
          {isEditing && (
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NoteForm;