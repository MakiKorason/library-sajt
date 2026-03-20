import React from 'react';
import './BookAnimation.css';

const BookAnimation = () => {
  const animationStyles = `
    @keyframes bookOpen {
      0%, 100% { transform: translate(-50%, -50%) rotateY(0deg); }
      50% { transform: translate(-50%, -50%) rotateY(-15deg); }
    }
    
    @keyframes coverOpen {
      0%, 100% { transform: rotateY(0deg); }
      25% { transform: rotateY(-180deg); }
      75% { transform: rotateY(-180deg); }
    }
    
    @keyframes pageFlip1 {
      0%, 100% { transform: rotateY(0deg); }
      20% { transform: rotateY(-180deg); }
      80% { transform: rotateY(-180deg); }
    }
    
    @keyframes pageFlip2 {
      0%, 100% { transform: rotateY(0deg); }
      30% { transform: rotateY(-180deg); }
      70% { transform: rotateY(-180deg); }
    }
    
    @keyframes pageFlip3 {
      0%, 100% { transform: rotateY(0deg); }
      40% { transform: rotateY(-180deg); }
      60% { transform: rotateY(-180deg); }
    }
    
    @keyframes pageFlip4 {
      0%, 100% { transform: rotateY(0deg); }
      50% { transform: rotateY(-180deg); }
    }
    
    @keyframes pageFlip5 {
      0%, 100% { transform: rotateY(0deg); }
      60% { transform: rotateY(-180deg); }
      40% { transform: rotateY(-180deg); }
    }
  `;
  return (
    <>
      <style>{animationStyles}</style>
      <div className="book-animation-container" style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.8,
        overflow: 'hidden',
        background: 'rgba(255, 0, 0, 0.2)' // Debug pozadina
      }}>
      <div className="book" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '225px',
        perspective: '1000px'
      }}>
        <div className="book-cover" style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          animation: 'bookOpen 4s ease-in-out infinite'
        }}>
          <div className="book-spine" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '20px',
            height: '100%',
            background: 'linear-gradient(45deg, #8B4513, #A0522D)',
            transform: 'translateX(-50%) rotateY(90deg)',
            transformOrigin: 'left'
          }}></div>
          <div className="book-front" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #8B4513, #A0522D, #CD853F)',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFD700',
            fontWeight: 'bold',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            transform: 'rotateY(0deg)',
            transformOrigin: 'left',
            animation: 'coverOpen 4s ease-in-out infinite'
          }}>
            <div className="book-title" style={{ fontSize: '20px', marginBottom: '8px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>БИБЛИОТЕКА</div>
            <div className="book-subtitle" style={{ fontSize: '16px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>РУМА</div>
          </div>
        </div>
        <div className="book-pages" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}>
          <div className="page page-1" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#FFF8DC',
            borderRadius: '2px',
            transformOrigin: 'left',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'pageFlip1 4s ease-in-out infinite'
          }}></div>
          <div className="page page-2" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#FFF8DC',
            borderRadius: '2px',
            transformOrigin: 'left',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'pageFlip2 4s ease-in-out infinite'
          }}></div>
          <div className="page page-3" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#FFF8DC',
            borderRadius: '2px',
            transformOrigin: 'left',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'pageFlip3 4s ease-in-out infinite'
          }}></div>
          <div className="page page-4" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#FFF8DC',
            borderRadius: '2px',
            transformOrigin: 'left',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'pageFlip4 4s ease-in-out infinite'
          }}></div>
          <div className="page page-5" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#FFF8DC',
            borderRadius: '2px',
            transformOrigin: 'left',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'pageFlip5 4s ease-in-out infinite'
          }}></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookAnimation;
