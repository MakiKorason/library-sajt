import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ImageModal from '../ImageModal';
import cobbis from '../../images/cobbis.webp'
import './BooksSearche.css'
import AnimatedCard from '../Department/AnimatedCard'; 
import { Helmet } from 'react-helmet-async';
 
const BooksSearche = () => {
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

  return (
    <>
      <Helmet>
  <title>Претраживање фонда – Библиотека Рума</title>
  <meta name="description" content="Претражите библиотечки фонд преко COBISS+ и MCOBISS апликације. Прегледајте књиге, ауторе и доступност у Градској библиотеци 'Атанасије Стојковић' Рума." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/pretrazivanje-fonda" />
  
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Претраживање фонда – Библиотека Рума",
        "url": "https://www.bibliotekaruma.rs/pretrazivanje-fonda",
        "description": "Претражите библиотечки фонд преко COBISS+ и MCOBISS апликације. Прегледајте књиге, ауторе и доступност у Градској библиотеци 'Атанасије Стојковић' Рума.",
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
    
    <Container className="container-library ms-auto mt-4 mb-4">
      <Row>
        <Col xs={12} md={12} >
          <h1 className="container-title" >
            Шта је COBISS?
          </h1>
          <p className="container-text">
          У савременом друштву модерне библиотеке као
важни центри знања захтевају и савремену
информациону технологију, као и повезивање у
заједнички библиотечко-информациони систем
као што је Cobiss ( Co-operative Online
Bibliographic System and Services).
          </p>
          <AnimatedCard>
           <img 
                src={cobbis}
                alt="Претрага фонда - илустрација" 
                loading="lazy"
                className="cobiss-image clickable-image" 
                onClick={() => handleImageClick(cobbis, 'Претрага фонда - илустрација', 'COBISS')}
                title="Кликните за већу слику"
                style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        width: '50%' 
                      }} 
                /></AnimatedCard>
     <br/>
     <hr/>
<AnimatedCard className="cobiss-card">
            <Card.Body>
              <Card.Text>
                <p className="container-text"><a href='https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru' rel="noopener noreferrer"   target="_blank" alt='линк ка MCOBISS'>COBISS+</a>
<br/>•	Web апликација која библиотекарима и
корисницима омогућава приступ претраживању
различитих база података (апликација је
бесплатна за све кориснике).
<br/>• Апликација је намењена свим корисницима
који траже релевантне информације или
расположиву грађу у библиотекама.
<br/>• Моја библиотека је кориснички налог унутар
библиотеке за појединачног члана, и он
омогућава различите библиотечке услуге путем
интернета.
</p>
              </Card.Text>
            </Card.Body>
          </AnimatedCard>
          <AnimatedCard className="cobiss-card">
            <Card.Body>
              <Card.Text>
                <h2 className='container-title'>  MCOBISS</h2>
           <p className="container-text">
           • Корисницима је на располагању прилагођена
верзија mcobiss преко мобилних уређаја.
<br/>• Апликација је бесплатна и може се преузети у
web продавници - Google play: MCOBISS. <a href='https://play.google.com/store/apps/details?id=si.izum.mcobiss&hl=sr&pli=1' rel="noopener noreferrer"   target="_blank" alt='линк ка MCOBISS'>MCOBISS.</a>  </p>
              </Card.Text>
            </Card.Body>
          </AnimatedCard>

          <Row>
        <Col xs={12} md={12} className="border-end">
          <h2 className="container-title">
         <br/> Упутство за коришћење COBISS-а
          </h2>
                <br/><p className="container-text">
                  
                • Посетите платформу:
                    <a
                      href="https://sr.cobiss.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     COBISS. 
                    </a>

                   <br/> • Унесите назив књиге, аутора или кључне речи у претрагу.
                  
                  <br/>• Изаберите библиотеку из падајућег менија да бисте видели
                    доступност.
                  
                  <br/> • Кликните на књигу за више детаља или резервишите ако је
                    доступна.
                  
                </p>
            </Col></Row>
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
    </>
  );
};

export default BooksSearche;