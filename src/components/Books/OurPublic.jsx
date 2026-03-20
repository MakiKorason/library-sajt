import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageModal from '../ImageModal';
import Kandor from '../../images/Ourpublic/Kandor.webp'
import Nuada from '../../images/Ourpublic/Nuada.webp'
import Nebuditeme from '../../images/Ourpublic/Nebuditeme.webp'
import Knjigeizratnogperioda from '../../images/Ourpublic/Knjigeizratnogperioda.webp'
import Katalog from '../../images/Ourpublic/Katalog.webp'
import public2 from "../../images/Ourpublic/public2.webp"
import public3 from "../../images/Ourpublic/public3.webp"
import public4 from "../../images/Ourpublic/public4.webp"
import public5 from "../../images/Ourpublic/public5.webp"
import public6 from "../../images/Ourpublic/public6.webp"
import public7 from "../../images/Ourpublic/public7.webp"
import public8 from "../../images/Ourpublic/public8.webp"
import public10 from "../../images/Ourpublic/public10.webp"
import public11 from "../../images/Ourpublic/public11.webp"
import public12 from "../../images/Ourpublic/public12.webp"
import public13 from "../../images/Ourpublic/public13.webp"
import public14 from "../../images/Ourpublic/public14.webp"
import public15 from "../../images/Ourpublic/public15.webp"
import public16 from "../../images/Ourpublic/public16.webp"
import public17 from "../../images/Ourpublic/public17.webp"
import public18 from "../../images/Ourpublic/public18.webp"
import AnimatedImage from "../Department/AnimatedImage";
import ClickableAnimatedImage from "../Department/ClickableAnimatedImage";
import { Helmet } from 'react-helmet-async';
 
const OurPublic =()=>{
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
  <title>Наша издања – Библиотека Рума</title>
  <meta name="description" content="Издања Градске библиотеке 'Атанасије Стојковић' у Руми. Погледајте наслове из области прозе, поезије, дечије и научне литературе." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/nasa-izdanja" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Наша издања – Библиотека Рума",
      "url": "https://www.bibliotekaruma.rs/nasa-izdanja",
      "description": "Издања Градске библиотеке 'Атанасије Стојковић' у Руми. Погледајте наслове из области прозе, поезије, дечије и научне литературе.",
      "publisher": {
        "@type": "Organization",
        "name": "Градска библиотека 'Атанасије Стојковић'",
        "url": "https://www.bibliotekaruma.rs/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bibliotekaruma.rs/logo.webp"
        }
      }
    }
  `}</script>
</Helmet>

<Container className="container-library mt-4 mb-4">
  <div className="container-frame">
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
        <h1 className="container-title text-center">Наша издања</h1>
        <p className="container-text">
          Током три деценије постојања издавачке делатности, наша библиотека је издала више од 120 наслова, међу којима се посебно истичу књиге које је написао Атанасије Стојковић.
</p>
      </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
        <h2 className="container-title mb-4">ПРОЗА</h2>
        <hr/>
      </Col>
    </Row>

      <Row >
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <ClickableAnimatedImage
              src={Kandor}
              alt="Кандор" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
              onClick={() => handleImageClick(Kandor, 'Кандор', 'Кандор')}
              title="Кликните за већу слику"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage 
              src={Nuada}
              alt="Нуада" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage 
              src={public2}
              alt="Зврј упразно" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage
              src={public3}
              alt="Балкански мол" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage
              src={public4}
              alt="Аристид и Наталија" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage
              src={public12}
              alt="Озбиљне приче Сањалице Маштарић" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h2 className="container-title mb-4">ПОЕЗИЈА</h2>
        <hr/>
          </Col>
        </Row>

    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage
              src={Nebuditeme}
              alt="Не будите ме" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage 
              src={public5}
              alt="У тишини лудака" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage 
              src={public10}
              alt="Пехар, ране" 
              className="container-image"
              style={{display: 'block', margin: '0 auto'}}
          width="300"
          height="400"
            />
          </Col>
    </Row>
          
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h2 className="container-title mb-4">ДЕЧИЈЕ КЊИГЕ</h2>
        <hr/>
      </Col>
        </Row>

    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public13}
              alt="Песме снохватице" 
              className="container-image"

          width="300"
          height="400"
            />
          </Col>
          <br/>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public14}
              alt="Како спава сунце" 
              className="container-image"
  
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public15}
              alt="Петнаест црвених ружа" 
              className="container-image"

          width="300"
          height="400"
            />
      </Col>
    </Row>

    <Row>
      <hr style={{color:'#f3f2ee'}}/>
      <br/>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public17}
              alt="Добро јутро, цветићи" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public16}
              alt="Дечак и звезде" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public18}
              alt="Дугино бих клупко" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
        </Row>

    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h2 className="container-title mb-4">НАУЧНЕ КЊИГЕ</h2>
        <hr/>
      </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4 text-center">
            <AnimatedImage 
              src={Knjigeizratnogperioda}
              alt="Књиге из ратног периода-каталог" 
              className="container-image"
          width="300"
          height="400"
        />
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={Katalog}
              alt="Каталог књига манастира Гргетег" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public11}
              alt="Примери личних имена у Руми" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public6}
              alt="Пут до крста Светог Владимира" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public7}
              alt="Рума" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                       <AnimatedImage 
              src={public8}
              alt="социјални аспекти квалитета живота особа са телесним инвалидитетом" 
              className="container-image"
          width="300"
          height="400"
            />
          </Col>
        </Row>
  </div>
      </Container>

      {/* Image Modal */}
      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />
    </>);
}

export default OurPublic;