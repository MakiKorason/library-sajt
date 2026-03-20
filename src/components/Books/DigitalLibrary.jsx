import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ImageModal from '../ImageModal';
import digitalna2 from '../../images/digitalna2.webp'
import AnimatedCard from '../Department/AnimatedCard';     import { Helmet } from 'react-helmet-async';
const DigitalLibrary =()=>{
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });

  // Function to handle image click
  const handleImageClick = (imageSrc, imageAlt, imageTitle) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt, title: imageTitle });
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage({ src: '', alt: '', title: '' });
  };

    return (<>

       <Helmet>
  <title>Дигитална библиотека - Библиотека Рума</title>
  <meta name="description" content="Прегледајте дигиталну библиотеку Градске библиотеке 'Атанасије Стојковић' у Руми. Бесплатан приступ дигитализованим књигама, снимцима и публикацијама." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/digitalna-biblioteka" />
  

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Дигитална библиотека - Библиотека Рума",
        "url": "https://www.bibliotekaruma.rs/digitalna-biblioteka",
        "description": "Прегледајте дигиталну библиотеку Градске библиотеке 'Атанасије Стојковић' у Руми. Бесплатан приступ дигитализованим књигама, снимцима и публикацијама.",
        "inLanguage": "sr-RS",
        "publisher": {
          "@type": "Organization",
          "name": "Градска библиотека 'Атанасије Стојковић'",
          "url": "https://www.bibliotekaruma.rs/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bibliotekaruma.rs/logo.webp"
          }
        }
      }
    `}
  </script>
</Helmet>
     <Container className='container-library mt-4 mb-4' >
      <h1 className="container-title mb-4">Наш дигитални фонд</h1>

      <p className="container-text mb-5">
      Дигитална библиотека „Атанасије Стојковић“ Рума
је основана 2023. године у оквиру пројекта који је
суфинансиран од стране Министарства културе
Републике Србије и Локалне самоуправе. Пројекат
има за циљ да дигитализује и промовише културну
баштину Руме и околине. У оквиру дигиталне
библиотеке може се видети грађа која је од
културног значаја за локалну средину.

      </p>
      <h2 className="container-title mb-5">Приступите дигитализованој грађи</h2>

      <Row className="mb-5">
        <Col md={12} className="mb-4">
          <AnimatedCard>
            <Card.Img   
              src={digitalna2} 
              variant="top"  
              alt="Дигитална библиотека"  
              className="clickable-image"
              onClick={() => handleImageClick(digitalna2, 'Дигитална библиотека', 'Дигитална библиотека')}
              style={{ 
                display: 'block', 
                margin: '0 auto', 
                width: '100%', 
                height:'100%'
             
              }}  
            />
            <Card.Body>
           
              <Button 
                style={{
                  width: '200px',
                  marginTop: '16px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                }}
                href="https://www.digitalna.bibliotekaruma.rs" 
                target="_blank" 
                rel="noopener noreferrer"  
                aria-label="Посетите дигиталну библиотеку Градске библиотеке Рума"
                onMouseOver={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onFocus={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onMouseOut={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onBlur={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
              >
                Посетите нашу дигиталну библиотеку
              </Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>

     
    </Container>

      {/* Image Modal */}
      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />
    
    </>)
}

export default DigitalLibrary