import React from 'react';
import { Modal } from 'react-bootstrap';
import './ImageModal.css';

const ImageModal = ({ show, onHide, imageSrc, imageAlt, title }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      size="lg"
      className="image-modal"
    >
      <Modal.Header closeButton style={{backgroundColor: '#f3f2ee', borderBottom: '2px solid #ddd'}}>
        <Modal.Title>{title || 'Слика'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center p-0" style={{backgroundColor: '#f3f2ee'}}>
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={imageAlt || 'Слика'} 
            className="modal-image"
            loading="lazy"
          />
        )}
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: '#f3f2ee', borderTop: '2px solid #ddd'}}>
        <button 
          className="btn btn-secondary" 
          onClick={onHide}
        >
          Затвори
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;

