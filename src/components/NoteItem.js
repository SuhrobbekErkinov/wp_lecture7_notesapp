import React, { useState } from 'react';
import Modal from './Modal';

function NoteItem({ note, onDelete, onEdit }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Function to create a preview of the content (first 60 characters)
  const getContentPreview = (content) => {
    return content.length > 60 
      ? `${content.substring(0, 60)}...` 
      : content;
  };
  
  // Handle delete with confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      onDelete(note.id);
    }
  };
  
  // Open modal to view full note
  const openNoteModal = () => {
    setIsModalOpen(true);
  };
  
  // Close the modal
  const closeNoteModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div 
        className={`note-item ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="note-header" 
          onClick={openNoteModal}
        >
          <h3 className="note-title">{note.title}</h3>
          <div className="note-timestamp">
            <small>{note.createdAt}</small>
          </div>
          <div className="expand-indicator">
            🔍
          </div>
        </div>
        
        <div className="note-content preview-content">
          <p>{getContentPreview(note.content)}</p>
        </div>
        
        <div className="note-actions">
          <button 
            className="btn btn-edit" 
            onClick={(e) => {
              e.stopPropagation();
              onEdit(note);
            }}
          >
            Edit
          </button>
          <button 
            className="btn btn-delete" 
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
      
      {/* Modal for full note view */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeNoteModal}
        title={note.title}
      >
        <div className="note-modal-content">
          <p>{note.content}</p>
          
          <div className="note-modal-actions">
            <button 
              className="btn btn-edit" 
              onClick={() => {
                closeNoteModal();
                onEdit(note);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default NoteItem;