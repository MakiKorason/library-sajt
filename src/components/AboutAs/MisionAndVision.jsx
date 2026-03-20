import { Col, Container, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import ImageModal from '../ImageModal';
import AnimatedCounter from '../AnimatedCounter';
import horhe from '../../images/horhe.webp';
import stiven from '../../images/stiven.webp';
import AnimatedImage from "../Department/AnimatedImage";
import { Helmet } from 'react-helmet-async';
import { FaUsers, FaBook, FaCalendarAlt } from 'react-icons/fa';

const MisionAndVision = () => {
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
        <title>Визија и мисија – Библиотека Рума</title>
        <meta
          name="description"
          content="Визија и мисија Градске библиотеке „Атанасије Стојковић“ у Руми – инклузија, учење и културни развој."
        />
        <link rel="canonical" href="https://www.bibliotekaruma.rs/vizija-misija-biblioteke" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Library",
            "name": "Градска библиотека Атанасије Стојковић Рума",
            "url": "https://www.bibliotekaruma.rs/vizija-misija-biblioteke",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Главна 114",
              "addressLocality": "Рума",
              "postalCode": "22400",
              "addressCountry": "RS"
            },
            "openingHours": "Mo-Fr 08:00-20:00, Sa 08:00-13:00",
            "telephone": "022/490-047"
          }
        `}</script>
      </Helmet>

      <Container className='container-library mt-4 mb-4'>
        <Card className="shadow-lg p-4" style={{ background: '#f9f6f2', borderRadius: '1.5rem', border: 'none' }}>
          <h1 className="container-title text-center mb-4">Визија и мисија</h1>

          {/* Animirani brojači na početku */}
          <Row className="justify-content-center mb-4">
            <Col md={4} className="text-center mb-3">
              <AnimatedCounter end={16800} title="Учлањени корисници" icon={<FaUsers />} />
            </Col>
            <Col md={4} className="text-center mb-3">
              <AnimatedCounter end={80000} title="Књига у фонду" icon={<FaBook />} />
            </Col>
            <Col md={4} className="text-center mb-3">
              <AnimatedCounter end={312} title="Дана рада годишње" icon={<FaCalendarAlt />} />
            </Col>
          </Row>

          {/* Vizija */}
          <Row className="align-items-center mb-4">
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 p-3" style={{ background: '#f5ede2', border: 'none', borderRadius: '1rem' }}>
                <h2 className="container-title text-center" style={{ fontSize: '1.5rem' }}>***</h2>
                <p className="container-text text-center mt-3">
                  Наша визија је да постанемо ослонац у образовању и културном развоју, пружајући подршку свим потребама наших корисника. Да растемо као иновативни центар знања и културе, у којем ће се користити најновије технологије за пружање услуга, где ће сваки корисник имати прилику да истражује, учи и доприноси заједници.
                </p>
              </Card>
            </Col>
            <Col md={6} className="text-center">
              <AnimatedImage 
                className="container-image clickable-image" 
                alt='књиге' 
                src={stiven}
                onClick={() => handleImageClick(stiven, 'књиге', 'Књиге')}
                title="Кликните за већу слику"
              />
            </Col>
          </Row>

          {/* Misija */}
          <Row className="align-items-center mb-4 flex-md-row-reverse">
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 p-3" style={{ background: '#f5ede2', border: 'none', borderRadius: '1rem' }}>
                <h2 className="container-title text-center" style={{ fontSize: '1.5rem' }}>***</h2>
                <p className="container-text text-center mt-3">
                  Мисија наше библиотеке је да пружи приступ информацијама, књигама и образовним ресурсима свим нашим корисницима. Библиотека је место инклузије, међусобног учења и размене идеја, зато је наш основни задатак да код деце развијемо и подстичемо навике читања. Циљ нам је да подржимо целоживотно учење, културну размену и развој критичког размишљања.
                </p>
              </Card>
            </Col>
            <Col md={6} className="text-center">
              <AnimatedImage 
                className="container-image clickable-image mt-4" 
                alt='књиге' 
                src={horhe}
                onClick={() => handleImageClick(horhe, 'књиге', 'Књиге')}
                title="Кликните за већу слику"
              />
            </Col>
          </Row>
        </Card>
        <hr/>
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

export default MisionAndVision;
