import React, { useState, useCallback, useMemo, Suspense, useEffect, useRef } from 'react';
import './Home.css';
import { Button, Col, Container, Row, Modal } from 'react-bootstrap';
import ImageModal from './ImageModal';
import cobbis from '../images/cobbis.webp';
import matica from '../images/matica.webp';
import narodna from '../images/narodna.webp';
import ministarstvo from '../images/ministarstvo.webp';
import opstina from '../images/opstina.webp';
import biblioteka from '../images/biblioteka.webp';
import konkurs from '../images/konkurs.webp';
import bombardovanje from '../images/bombardovanje.jpg';
import muzej from '../images/muzej.webp';
import kc from '../images/kc.webp';
import turisticka from '../images/turisticka.webp';
import miljkovic from '../images/miljkovic.webp'
import logoDigitalna from '../images/logoDigitalna.webp'
import mojVuneni from '../images/mojVuneni.jpg'
import '@react-pdf-viewer/core/lib/styles/index.css';
import beke from '../images/beke.webp';
import Frigo from '../images/Frigo.webp';
import Boss from '../images/Boss.webp';
import trkulja from '../images/trkulja.webp';
import books from '../images/books.webp';
import Panonija from '../images/Panonija.webp';
import karoselSlika from '../images/karoselSlika.webp';
import digitalna from '../images/digitalna.webp';
import saradnja1 from '../images/saradnja1.webp';
import saradnja2 from '../images/saradnja2.webp';
import saradnja3 from '../images/saradnja3.webp';
import azbukvar from '../images/azbukovar.jpg'
import 'react-calendar/dist/Calendar.css';
import AnimatedCard from './Department/AnimatedCard'; 
import pokrajina from '../images/pokrajina.webp';
import { Helmet } from "react-helmet-async";

// Bootstrap JS is imported in index.js


const Calendar = React.lazy(() => import('react-calendar'));
const AnimatedImage = React.lazy(() => import('./Department/AnimatedImage'));


const Home =()=> { 

 const EVENTS_YEAR = 2026;

  // Почетни датум у календару: данашњи датум (без ручног означавања 1. фебруара)
  const [date, setDate] = useState(new Date());

  const [showFriends, setShowFriends] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [imageSetIndex, setImageSetIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });
  const [showAboutDetails, setShowAboutDetails] = useState(false);

  const tileClassName = useCallback(({ date, view }) => {
    if (view !== 'month' || !(date instanceof Date)) return;

    const isSameDay = (d, year, month, day) =>
      d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;

    // Означени датуми: 27. фебруар + 24. и 26. март 2026.
    if (
      
      isSameDay(date, EVENTS_YEAR, 3, 22)
       || // фебруар (month: 1)
      isSameDay(date, EVENTS_YEAR, 3, 2 ) || // март (month: 2)
      isSameDay(date, EVENTS_YEAR, 2, 26) 
       ||
      isSameDay(date, EVENTS_YEAR, 2, 31) 
         // март (month: 2)
    ) {
      return 'marked-date';
    }
  }, []);


  const onChange = useCallback(date =>{
    setDate(date);
  
 
    if (!(date instanceof Date) || date.getFullYear() !== EVENTS_YEAR) {
      setShowImage(false);
      return;
    }

    // Klik na означене датуме (приказ слике у модал-у)
    if (date.getMonth(bombardovanje) === 2 && date.getDate() === 31) {
      setModalImage(bombardovanje);
      setShowImage(true);
      return;
    }

    if (date.getMonth() === 3 && date.getDate() === 2) {
      setModalImage(azbukvar);
      setShowImage(true);
      return;
    }
    if (date.getMonth() === 3 && date.getDate() === 22) {
      setModalImage(mojVuneni);
      setShowImage(true);
      return;
    }
   
    if (date.getMonth() === 2 && date.getDate() === 26) {
      setModalImage(miljkovic);
      setShowImage(true);
      return;
    }

    setShowImage(false);
  }, []);

  const imageSets = useMemo(() => [
    // Одељење огласне табле: Хуго (11. фебруар) ближе календару, Вaсилије (6. фебруар) десно
    // Render koristi samo [0] i [1], zato pravimo setove po 2 slike.
    [mojVuneni,azbukvar],
    [bombardovanje, miljkovic],
  ], []);
  
  const toggleImageSet = () => {
    // Ако постоји само један сет слика, нема шта да се мења
    if (imageSets.length <= 1) {
      return;
    }
    setImageSetIndex((prevIndex) => {
      const lastIndex = imageSets.length - 1;
      let nextIndex = prevIndex + (isForward ? 1 : -1);
      if (nextIndex > lastIndex) {
        setIsForward(false);
        nextIndex = prevIndex - 1;
      } else if (nextIndex < 0) {
        setIsForward(true);
        nextIndex = prevIndex + 1;
      }
      return nextIndex;
    });
  };

  // Function to handle image click

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage({ src: '', alt: '', title: '' });
  };

  const handleImageClick = (image, title) => {
    setModalImage(image);
    setSelectedImage({ src: image, alt: title, title: title });
    setShowImageModal(true);
  };

  // Ensure Bootstrap carousel is initialized
  const carouselRef = useRef(null);
  
  useEffect(() => {
    let carouselInstance = null;
    let initTimer = null;
    
    const initCarousel = () => {
      const carouselElement = carouselRef.current;
      if (!carouselElement) {
        // Retry if element is not ready
        initTimer = setTimeout(initCarousel, 100);
        return;
      }
      
      // Check if Bootstrap is available
      if (typeof window === 'undefined' || !window.bootstrap || !window.bootstrap.Carousel) {
        initTimer = setTimeout(initCarousel, 100);
        return;
      }
      
      try {
        // Get or create instance - Bootstrap 5 way
        carouselInstance = window.bootstrap.Carousel.getOrCreateInstance(carouselElement, {
          interval: 30000,
          ride: 'carousel',
          wrap: true,
          keyboard: true,
          pause: 'hover'
        });
        
        // Ensure it's cycling
        if (carouselInstance && !carouselInstance._interval) {
          carouselInstance.cycle();
        }
      } catch (error) {
        console.error('Error initializing carousel:', error);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    initTimer = setTimeout(initCarousel, 200);
    
    return () => {
      if (initTimer) {
        clearTimeout(initTimer);
      }
      // Cleanup on unmount
      if (carouselInstance) {
        try {
          carouselInstance.dispose();
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  return (
    <>
  <Helmet>
  <title>Градска библиотека Атанасије Стојковић Рума</title>
  <meta name="description" content="Градска библиотека Атанасије Стојковић у Руми нуди широк избор књига, дигитални фонд, културне догађаје и образовне програме. Откријте нашу колекцију, учествујте у догађајима и истражите богату историју библиотеке." />
  <meta name="keywords" content="библиотека, Рума, књиге, догађаји, препоруке, Атанасије Стојковић" />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/" />
  
  {/* Open Graph meta tags za Facebook sharing */}
  <meta property="og:title" content="Градска библиотека Атанасије Стојковић Рума – званични сајт" />
  <meta property="og:description" content="Градска библиотека Атанасије Стојковић у Руми нуди широк избор књига, дигитални фонд, културне догађаје и образовне програме. Откријте нашу колекцију, учествујте у догађајима и истражите богату историју библиотеке." />
  <meta property="og:image" content="https://www.bibliotekaruma.rs/logo.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Градска библиотека Атанасије Стојковић Рума" />
  <meta property="og:image:type" content="image/webp" />
  <meta property="og:url" content="https://www.bibliotekaruma.rs/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Градска библиотека Рума" />
  <meta property="og:locale" content="sr_RS" />
  
  {/* Twitter Card meta tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Градска библиотека Атанасије Стојковић Рума – званични сајт" />
  <meta name="twitter:description" content="Градска библиотека Атанасије Стојковић у Руми нуди широк избор књига, дигитални фонд, културне догађаје и образовне програме." />
  <meta name="twitter:image" content="https://www.bibliotekaruma.rs/logo.webp" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://www.bibliotekaruma.rs/#website",
            "url": "https://www.bibliotekaruma.rs/",
            "name": "Градска библиотека Рума",
            "alternateName": "Градска библиотека Атанасије Стојковић Рума",
            "description": "Званични сајт Градске библиотеке у Руми",
            "publisher": {
              "@id": "https://www.bibliotekaruma.rs/#organization"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://www.bibliotekaruma.rs/#organization",
            "name": "Градска библиотека Рума",
            "alternateName": "Градска библиотека Атанасије Стојковић Рума",
            "description": "Званични сајт Градске библиотеке у Руми",
            "url": "https://www.bibliotekaruma.rs/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.bibliotekaruma.rs/logo.webp"
            },
            "sameAs": [
              "https://www.facebook.com/bibliotekaatanasijestojkovic.ruma",
              "https://www.instagram.com/gradska_biblioteka_ruma",
              "https://youtube.com/@gradskabibliotekaruma"
            ]
          }
        ]
      }
    `}
  </script>
</Helmet>

<Row>
  <Col md={12}>
    <div
      ref={carouselRef}
      id="bibliotekaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="30000"
      data-bs-wrap="true"
      data-bs-keyboard="true"
      data-bs-pause="false"
    >
      {/* INDICATORS */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#bibliotekaCarousel" data-bs-slide-to="0" className="active" aria-label="Прва слика" />
        <button type="button" data-bs-target="#bibliotekaCarousel" data-bs-slide-to="1" aria-label="Друга слика" />
        <button type="button" data-bs-target="#bibliotekaCarousel" data-bs-slide-to="2" aria-label="Трећа слика" />
        <button type="button" data-bs-target="#bibliotekaCarousel" data-bs-slide-to="3" aria-label="Четврта слика" />
      </div>

      {/* SLIDES */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src={biblioteka}
            alt="Зграда библиотеке у Руми"
            className="d-block w-100 image-carousel img-fluid"
            loading="lazy"
            width="1200"
            height="675"
          />
          <div className="carousel-caption">
            <p className="carousel-caption-text">
              Зграда Градске библиотеке „Атанасије Стојковић" представља пример
              јединственог архитектонског стваралаштва.
              <br />
              <Button
                href="https://www.gradnja.rs/rekonstrukcija-dom-vojske-jna-ruma/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light container-button"
                aria-label="Сазнајте више о згради библиотеке"
              >
                ДЕТАЉНИЈЕ
              </Button>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={digitalna}
            alt="Атанасије Стојковић"
            className="d-block w-100 image-carousel img-fluid clickable-image"
            loading="lazy"
            onClick={() =>
              handleImageClick(digitalna, "Атанасије Стојковић", "Атанасије Стојковић")
            }
          />
          <div className="carousel-caption">
            <p className="carousel-caption-text">
              Румљанин Атанасије Стојковић био је најобразованији Србин
              прве трећине 19. века.
              <br />
              <Button
                href="https://www.facebook.com/watch/?v=1235424304400303"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light container-button btn-lg"
                aria-label="Сазнајте више о Атанасију Стојковићу"
              >
                ДЕТАЉНИЈЕ
              </Button>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={karoselSlika}
            alt="Култура за све"
            className="d-block w-100 image-carousel img-fluid clickable-image"
            loading="lazy"
            onClick={() =>
              handleImageClick(karoselSlika, "Култура за све", "Култура за све")
            }
          />
          <div className="carousel-caption">
            <p className="carousel-caption-text">
              Пројекат „Култура за све“ представља јачање техничких капацитета наше установе.
              <br />
              <Button
                href="https://sremskevesti.rs/sva-odeljenja-rumske-gradske-biblioteke-atanasije-stojkovic-dostupna-ljudima-ostecenog-sluha-slepim-i-slabovidim-osobama/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light container-button"
                aria-label="Сазнајте више о пројекту Култура за све"
              >
                ДЕТАЉНИЈЕ
              </Button>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={books}
            alt="Омиљене књиге наших корисника"
            className="d-block w-100 image-carousel img-fluid clickable-image"
            loading="lazy"
            onClick={() =>
              handleImageClick(
                books,
                "ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА",
                "ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА"
              )
            }
          />
          <div className="carousel-caption">
            <p className="carousel-caption-text">
              ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА
              <br />
              <Button
                href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma/videos/967554408223187"
                target="_blank"
                rel="noopener noreferrer"
                className="btn container-button"
                style={{ backgroundColor: "#6c757d", color: "#fff", border: "none" }}
                aria-label="Сазнајте више о омиљеним књигама корисника"
              >
                ДЕТАЉНИЈЕ
              </Button>
            </p>
          </div>
        </div>

      </div>
    </div>
  </Col>
</Row>

<Container className="container-library ms-auto mt-4 mb-4">
  <Row>
    <Col md={12}>
      <h1 className="container-title" >
        Градска библиотека Атанасије Стојковић у Руми
      </h1>
      <br/>
      <div className='container-text'>
        <p>
          Градска библиотека „Атанасије Стојковић" у Руми је најстарија културна институција у овом крају, која непрекидно ради на унапређењу културног и просветног живота заједнице. Библиотека носи име знаменитог Румљанина Атанасија Стојковића, најобразованијег Србина прве трећине 19. века, који је својим радом и доприносом оставио неизбрисив траг у српској култури и науци.
        </p>

        <button
          type="button"
          className="btn btn-secondary about-details-toggle"
          onClick={() => setShowAboutDetails((prev) => !prev)}
          aria-expanded={showAboutDetails}
          aria-controls="about-more-details"
        >
          ДЕТАЉНИЈЕ
        </button>

        <div
          id="about-more-details"
          className={`about-more-details ${showAboutDetails ? 'expanded' : 'collapsed'}`}
          aria-hidden={!showAboutDetails}
        >
          <p>
            Наша библиотека нуди широк спектар услуга и програма за све категорије корисника. Поседујемо богат књижни фонд од преко 80.000 публикација, који обухвата белетристику, научну и стручну литературу, дечије књиге, као и специјалне колекције и легате. Осим традиционалног библиотечког фонда, наша библиотека је поносна на дигиталну библиотеку која омогућава бесплатан приступ дигитализованим књигама, документима и публикацијама од културног значаја за локалну средину.
          </p>

          <p>
            Библиотека активно организује бројне културне манифестације и догађаје током целе године. Најзначајније манифестације укључују Дане словенске писмености и културе, Дане Атанасија Стојковића, Румску књижевну колонију и Румско културно лето. Ови догађаји окупљају писце, уметнике, научнике и све љубитеље књиге и културе, чинећи библиотеку живим културним центром града.
          </p>

          <p>
            Наша библиотека је подељена на неколико специјализованих одељења која служе различитим потребама корисника. Одељење за одрасле читаоце нуди широк избор белетристике и стручне литературе, Одељење за децу и омладину организује програме за најмлађе читаоце, Одељење завичајне грађе чува и промовише локалну историју и културу, док Одељење научне и стручне литературе обезбеђује приступ публикацијама из готово свих области људског знања.
          </p>

          <p>
            Кроз пројекте као што су „Култура за све" и друге иницијативе, библиотека ради на томе да све своје садржаје учини доступним свим грађанима, укључујући особе са инвалидитетом. Наша библиотека је модерна, приступачна и отворена за све, и непрекидно ради на унапређењу својих услуга и проширењу свог утицаја у локалној заједници.
          </p>
        </div>
      </div>
    </Col>
  </Row>
</Container>

{/* Kolаж сарадње са Матицом српском */}



<Container  className=" container-library ms-auto mt-4 mb-4 ">
 
<h2 className= "container-title"  >Огласна табла актуелних догађаја - Градска библиотека Атанасије Стојковић Рума</h2>
<hr style={{margin: '0 auto', width: '50%' ,border: '1px solid' }} /> <Row>
    <Col md={4} className='mt-3 mb-3 text-center '>
    
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <Calendar  onChange={onChange} value={date}  tileClassName={tileClassName}  />
        </Suspense>
      {/* Modal za prikaz slike */}
              <Modal show={showImage} onHide={() => setShowImage(false)} centered size="md">
        <Modal.Header closeButton style={{backgroundColor: '#f3f2ee'}}>
          <Modal.Title>Догађај</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{backgroundColor: '#f3f2ee'}}>
          {modalImage && (
            <img src={modalImage} alt="Слика за изабрани датум" style={{width: '100%', height: 'auto'}} loading="lazy" />
          )}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: '#f3f2ee'}}>
          <Button variant="secondary" onClick={() => setShowImage(false)} aria-label="Затвори модал са сликом">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>  

    <Col md={8} className='mt-3 mb-3 text-center'>
      <div className="carousel-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <div className="carousel-images" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading AnimatedImage...</div>}>
            <AnimatedImage
              src={imageSets[imageSetIndex][0]}
              alt="Прва слика"
              className="container-image"
              width="400"
              height="300"
              style={{ 
                height: 'auto',
                width: '100%',
                maxWidth: window.innerWidth < 768 ? '280px' : '400px'
              }}
            />
          </Suspense>
          
          <Suspense fallback={<div>Loading AnimatedImage...</div>}>
            <AnimatedImage
              src={imageSets[imageSetIndex][1]}
              alt="Друга слика"
              className="container-image"
              width="400"
              height="300"
              style={{ 
                height: 'auto',
                width: '100%',
                maxWidth: window.innerWidth < 768 ? '280px' : '400px'
              }}
            />
          </Suspense>
        </div>
        
        <Button 
          variant="secondary" 
          onClick={toggleImageSet}
          style={{ 
            borderRadius: '50%',
            width: window.innerWidth < 768 ? '35px' : '40px',
            height: window.innerWidth < 768 ? '35px' : '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: window.innerWidth < 768 ? '16px' : '18px',
            padding: '0',
            fontWeight: 'bold',
            marginLeft: '10px',
            marginTop: window.innerWidth < 768 ? '10px' : '0'
          }}
          aria-label="Пребаци скуп слика"
          title={isForward ? "Пребаци на следећи скуп" : "Врати на претходни скуп"}
        >
          {isForward ? '→' : '←'}
        </Button>
      </div>
    </Col>
  </Row>
</Container>

  
        <Container className='mt-4 '>
         <Row className='text-center'>
         <Col md={4} className='mt-4'>     
         <AnimatedCard>
        <a href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru" target="_blank" rel="noopener noreferrer">
        <p className='container-title'>Претражите<br/> наш фонд  </p> </a><img 
      src={cobbis}
      alt="COBISS" 
      className='container-image'
      style={{border:'none', width: "75%"}}
      width="200"
      height="200"
      loading="lazy"
      />
  </AnimatedCard> 
     </Col>
           <Col md={4} className='mt-4'>
               <AnimatedCard>
                <a href="https://www.digitalna.bibliotekaruma.rs/" target='_blank' rel="noopener noreferrer">  <p className='container-title'>  
               Наш дигитални<br/> фонд </p></a>
                <img 
      src={logoDigitalna}
       alt="Грб Градске библиотеке Рума" 
       className='container-image digital-logo'
       width="300"
       height="200"
       loading="lazy"
       itemProp="image"
       /> </AnimatedCard>
       </Col> 
                   <Col  md={4}  className='mt-0'>
                  <AnimatedCard>
             <a href="https://www.facebook.com/photo/?fbid=1326535312805422&set=a.512519967540298" target="_blank" rel="noopener noreferrer" className="konkurs-link">
               <p className="container-title mb-0">
                 Књижевни <br/>конкурс
               </p>
             </a>
             <img 
       src={konkurs}
       alt="Конкурс" 
       className='container-image konkurs-logo'
       style={{border:'none', width:'45%'}}
               width="250"
               height="200"
               loading="lazy"
             />
           </AnimatedCard>
         </Col></Row>
    
           <Row>   
            <Col md={12}>
      
       </Col></Row>
       </Container>

<Container className="container-library ms-auto mt-4 mb-4">
 
  <Row className="justify-content-center">
    <Col md={3} className="mb-3">
      <img 
        src={saradnja1} 
        alt="Сарадња са Матицом српском 1" 
        className="img-fluid"
        style={{ 
          width: '100%', 
          height: 'auto', 
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
        loading="lazy"
      />
    </Col>
    <Col md={3} className="mb-3">
      <img 
        src={saradnja3} 
        alt="Сарадња са Матицом српском 2" 
        className="img-fluid"
        style={{ 
          width: '100%', 
          height: 'auto', 
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
        loading="lazy"
      />

      <img 
        src={saradnja2} 
        alt="Сарадња са Матицом српском 3" 
        className="img-fluid"
        style={{ 
          width: '100%', 
          height: 'auto', 
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
        loading="lazy"
      />
    </Col> 
    <Col md={6}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: '#3f2c11',
          fontFamily: 'Arial',
          marginTop: '7rem',
          padding: '0 1rem'
        }}>
         Година 2025. завршена је на најлепши могући начин, а сам крај године обележио је најсјајнији тренутак наше сарадње са Матицом српском, која нам је доделила захвалницу за сарадњу, помоћ и подршку током протекле године. Награда, коју је у име библиотеке примио директор Дамир Васиљевић Тоскић, још једном потврђује значајну улогу наше библиотеке у културном и просветном животу заједнице.
        </p>
        <hr/>
      </div>
    </Col>
  
  </Row>
</Container>
        <br/><hr/>
   <AnimatedCard>
      <Container className='container-library ms-auto mt-4 mb-4' >
        <Row>
    
    <Row>

  <Col md={12}>
        <h2 className='container-title'>Званични документи Градске библиотеке Атанасије Стојковић у Руми</h2><br/>
        <p className='container-text'>Правилник о условима и начину коришћења библиотечке грађе</p>
        <Button
  onClick={() => window.open('/Pravilnik.pdf', '_blank')}
className='btn btn-secondary'
aria-label="Преузми правилник о условима и начину коришћења библиотечке грађе"
>
ДЕТАЉНИЈЕ
</Button><hr/>
<p className='container-text'>Статут установе Градске библиотеке „Атанасије Стојковић“ Рума </p>
        <Button
  onClick={() => window.open('/Statut.pdf', '_blank')}
className='btn btn-secondary'
aria-label="Преузми статут установе Градске библиотеке Атанасије Стојковић Рума"
>
ДЕТАЉНИЈЕ
</Button><br/><hr/> </Col>
</Row>
    </Row>
      </Container>
</AnimatedCard>
    <br/><hr/>

<h2 className='container-title'>Пријатељи и сарадници Градске библиотеке Атанасије Стојковић у Руми</h2>
<Row className='image-background lazy-bg '>
    <div className="carousel-item active">
      <div  style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} >
     < Row>
          <Col md={12} className='text-center' > 
        <img style={{width:'10%' }} src={ministarstvo} alt='Министарство културе Србије' loading="lazy"  />
<img style={{width:'15%'}}  src={opstina} alt='Општина Рума' loading="lazy"  />     
<img src={pokrajina} style={{width:'7%'}} alt='Покрајински секретаријат за културу' loading="lazy"  />
    </Col></Row>
      
          <hr/> 
          <Col md={12} className='text-center'>
          <img style={{width:'13%'}}  src={matica} alt='Матица српска' loading="lazy" />  
<img style={{width:'8%'}}  alt='Народна библиотека Србије' src={narodna} loading="lazy"  /> 
       <img style={{width:'18%', marginTop:'1em', marginLeft:'1rem'}} src={muzej} alt='Музеј у Руми' loading="lazy"  />
          <img style={{width:'15%',marginLeft:'1rem' }} src={turisticka} alt='Туристичка организација Рума' loading="lazy" />
          <img  style={{width:'6%', marginLeft:'1rem'}}  src={kc} alt="Културни центар Рума"  loading="lazy"  />
         </Col>
          </div>
      </div>     
</Row>

<div
  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%' }}
  className="container mt-3"
>
  <h2 style={{marginLeft:'26rem'}}>Пријатељи библиотеке</h2>
  {!showFriends && (
  <button
    type="button"
    className="btn btn-secondary"
      onClick={() => setShowFriends(true)}
      aria-label="Прикажи пријатеље библиотеке"
  >
    Пријатељи библиотеке
  </button>
  )}
  {showFriends && (
    <div className="text-center" style={{position: 'relative'}}>
      <button
        type="button"
        className="btn mb-3"
        style={{ backgroundColor: '#343a40', color: 'white', border: 'none', position: 'absolute', top: '-1.5rem', left: '0.5rem', zIndex: 2 }}
        onClick={() => setShowFriends(false)}
        aria-label="Затвори пријатеље библиотеке"
      >
        Затвори
      </button>
      <div className="d-flex justify-content-center align-items-center flex-wrap" style={{marginTop: '2.5rem'}}>
    <img
      style={{ width: '12%', marginRight:'1rem', objectFit: 'contain' }}
      src={Panonija}
      alt="Панонија књижара у Руми"
      width="144"
      height="72"
      loading="lazy"
    />
    <img
      style={{ width: '12%', objectFit: 'contain' }}
      src={Boss}
      alt="Босс компанија Рума"
      width="144"
      height="72"
      loading="lazy"
    />
    <img
      style={{ width: '20%', objectFit: 'contain' }}
      src={trkulja}
      alt="Тркуља керамика Рума"
      width="180"
      height="90"
      loading="lazy"
    />
    <img
      style={{ width: '10%', objectFit: 'contain' }}
      src={Frigo}
      alt="Фриго Жика Рума"
      width="120"
      height="60"
      loading="lazy"
    />
    <img
      style={{ width: '12%', marginLeft:'1rem', objectFit: 'contain' }}
      src={beke}
      alt="Беке компанија Рума"
      width="144"
      height="72"
      loading="lazy"
    />
  </div>
    </div>
    )}
</div><hr/>

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
}

export default Home;