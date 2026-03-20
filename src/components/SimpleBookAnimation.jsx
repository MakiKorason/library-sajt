import React from 'react';

const SimpleBookAnimation = () => {
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.3,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    book: {
      width: '200px',
      height: '150px',
      background: 'linear-gradient(135deg, #8B4513, #A0522D, #CD853F)',
      borderRadius: '10px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFD700',
      fontWeight: 'bold',
      textAlign: 'center',
      animation: 'pulse 3s ease-in-out infinite',
      position: 'relative'
    },
    title: {
      fontSize: '16px',
      marginBottom: '5px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    subtitle: {
      fontSize: '14px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    pages: {
      position: 'absolute',
      top: '5px',
      left: '5px',
      right: '5px',
      bottom: '5px',
      background: '#FFF8DC',
      borderRadius: '5px',
      animation: 'pageFlip 4s ease-in-out infinite'
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { 
        transform: scale(1) rotate(0deg); 
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      }
      50% { 
        transform: scale(1.05) rotate(2deg); 
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
      }
    }
    
    @keyframes pageFlip {
      0%, 100% { 
        opacity: 0.8; 
        transform: rotateY(0deg); 
      }
      25% { 
        opacity: 0.3; 
        transform: rotateY(90deg); 
      }
      50% { 
        opacity: 0.8; 
        transform: rotateY(180deg); 
      }
      75% { 
        opacity: 0.3; 
        transform: rotateY(270deg); 
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.book}>
          <div style={styles.pages}></div>
          <div style={styles.title}>БИБЛИОТЕКА</div>
          <div style={styles.subtitle}>РУМА</div>
        </div>
      </div>
    </>
  );
};

export default SimpleBookAnimation;



