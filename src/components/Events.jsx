import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import ImageModal from './ImageModal';
import { BsCalendar2Heart } from 'react-icons/bs';
import { LiaBookSolid } from "react-icons/lia";
import daniSlovensk from '../images/daniSlovensk.webp';
import Atanasije from '../images/Atanasije.webp';
import knjizevnaKolonija from '../images/knjizevnaKolonija.webp'
import kulturnoLeto from '../images/kulturnoLeto.webp';
import folklor from '../images/folklor.webp'
import knjizevnaKolonija2 from '../images/knjizevnaKolonija2.webp'
import rumskoKulturnoLeto2 from '../images/rumskoKulturnoLeto2.webp'
import kvizOAtanasiju from '../images/kvizOAtanasiju.webp'
import ikona from '../images/ikona.webp'
import knjizevnaKolonija3 from '../images/knjizevnaKolonija3.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCard from './Department/AnimatedCard'; 
import './Events.css'
import AnimatedImage from './Department/AnimatedImage';
import predavanjeNinkovic from '../images/predavanjeNinkovic.webp'
import izlozbaAtanasije from '../images/izlozbaAtanasije.webp'
import { Helmet } from 'react-helmet-async';
const Events = () => {

  const [showEvent1, setShowEvent1] = useState(false);
  const [showEvent2, setShowEvent2] = useState(false);
  const [showEvent3, setShowEvent3] = useState(false);
  const [showEvent4, setShowEvent4] = useState(false);
  
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });


  const handleShowEvent1 = () => setShowEvent1(true);
  const handleShowEvent2 = () => setShowEvent2(true);
  const handleShowEvent3 = () => setShowEvent3(true);
  const handleShowEvent4 = () => setShowEvent4(true);


  const handleClose = () => {
    setShowEvent1(false);
    setShowEvent2(false);
    setShowEvent3(false);
    setShowEvent4(false);
  };

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
  <title>Манифестације – Библиотека Рума</title>
  <meta
    name="description"
    content="Сазнајте све о манифестацијама које организује Градска библиотека у Руми: Дани словенске писмености и културе, Дани Атанасија Стојковића, Румска књижевна колонија и Румско културно лето."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma" />
  <meta property="og:title" content="Манифестације – Градска библиотека Рума" />
  <meta property="og:description" content="Пратите најновије културне догађаје и манифестације у Градској библиотеци Рума." />
  <meta property="og:url" content="https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma" />
  <meta property="og:type" content="website" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://www.bibliotekaruma.rs/#organization",
            "name": "Градска библиотека Атанасије Стојковић Рума",
            "url": "https://www.bibliotekaruma.rs/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.bibliotekaruma.rs/logo.webp",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://www.facebook.com/bibliotekaatanasijestojkovic.ruma",
              "https://www.instagram.com/bibliotekaruma/",
              "https://www.youtube.com/@bibliotekaruma"
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma#webpage",
            "url": "https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma",
            "name": "Манифестације – Библиотека Рума",
            "isPartOf": {
              "@id": "https://www.bibliotekaruma.rs/#website"
            },
            "inLanguage": "sr",
            "datePublished": "2011-05-21",
            "dateModified": "2024-07-22"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Почетна",
                "item": "https://www.bibliotekaruma.rs/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Манифестације",
                "item": "https://www.bibliotekaruma.rs/manifestacije-biblioteka-ruma"
              }
            ]
          }
        ]
      }
    `}
  </script>
</Helmet>

      <Container className='container-library d-flex flex-wrap justify-content-center mt-4 mb-4'>
        <h1 className="container-title text-center mb-4">Манифестације</h1>
        <Row> 
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
          
            < AnimatedCard  className='events-card' >
              <Card.Body className="d-flex flex-column">
                <Row className="align-items-center">
                  <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
                    <Card.Img 
                      className="mx-auto d-block card-img clickable-image" 
                      src={daniSlovensk} 
                      onClick={() => handleImageClick(daniSlovensk, 'Дани словенске писмености и културе', 'Дани словенске писмености и културе')}
                      alt="Дани словенске писмености и културе"
                    />
                  </Col>
                  <Col xs={12} md={7} className="text-md-start text-center d-flex flex-column">
                    <h2 className="container-title d-inline-block">
                  Дани словенске писмености и културе <BsCalendar2Heart />
                </h2>
                    
                    <p className='container-text mt-3'>Дани словенске писмености и културе обележавају се у недељи када се прославља дан Светих Ћирила и Методија, 24. мај.</p>
                    <Button className='btn btn-secondary mt-auto' onClick={handleShowEvent1} aria-label="Сазнајте више о Данима словенске писмености и културе">Детаљније</Button>
                  </Col>
                </Row>
            </Card.Body>
            </ AnimatedCard >
          </Col>

          <Col md={6} xs={12} sm={12}  lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card' >
              <Card.Body className="d-flex flex-column">
                <Row className="align-items-center">
                  <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
                   <Card.Img 
                      className="mx-auto d-block card-img clickable-image" 
                      src={Atanasije} 
                      onClick={() => handleImageClick(Atanasije, 'Дани Атанасија Стојковића', 'Дани Атанасија Стојковића')}
                      alt="Дани Атанасија Стојковића"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </Col>
                  <Col xs={12} md={7} className="text-md-start text-center d-flex flex-column">
                    <h2 className="container-title d-inline-block">
                      Дани Атанасија Стојковића <BsCalendar2Heart />
                </h2>
                    
                    <p className='container-text mt-1'>Дани Атанасија Стојковића традиционално се одржавају током недеље у којој се обележава датум његовог рођења – 20. септембар.</p>
                    <Button className='btn btn-secondary mt-auto' onClick={handleShowEvent2} aria-label="Сазнајте више о Данима Атанасија Стојковића">Детаљније</Button>
                  </Col>
                </Row>
              </Card.Body>
            </ AnimatedCard >
          </Col>
          </Row>

          <Row>
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card'>
              <Card.Body className="d-flex flex-column">
                <Row className="align-items-center">
                  <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
                    <Card.Img 
                      className="mx-auto d-block card-img clickable-image" 
                      src={knjizevnaKolonija}
                      onClick={() => handleImageClick(knjizevnaKolonija, 'Румска књижевна колонија', 'Румска књижевна колонија')}
                      alt="Румска књижевна колонија"
                    />
                  </Col>
                  <Col xs={12} md={7} className="text-md-start text-center d-flex flex-column">
                    <h2 className="container-title d-inline-block">
                  Румска књижевна колонија <BsCalendar2Heart />
                </h2>
                 
                    <p className='container-text mt-3'>Румска књижевна колонија традиционално се одржава сваке године у децембру.</p>
                    <Button className='btn btn-secondary mt-auto' onClick={handleShowEvent3} aria-label="Сазнајте више о Румској књижевној колонији">Детаљније</Button>
                  </Col>
                </Row>
              </Card.Body>
            </ AnimatedCard >
          </Col>
        
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card'>
              <Card.Body className="d-flex flex-column">
                <Row className="align-items-center">
                  <Col xs={12} md={5} className="text-center mb-md-0">
                    <Card.Img 
                      className="mx-auto d-block card-img clickable-image" 
                      src={kulturnoLeto}
                      onClick={() => handleImageClick(kulturnoLeto, 'Румско културно лето', 'Румско културно лето')}
                      alt="Румско културно лето"
                    />
                  </Col>
                  <Col xs={12} md={7} className="text-md-start text-center d-flex flex-column">
                    <br/><h2 className="container-title d-inline-block">
                  Румско културно лето
                </h2>
       
                    <p className='container-text mt-1'>Традиционална манифестација која се одржава од 28. јуна до 31. августа. <BsCalendar2Heart /> </p>
                    <Button className='btn btn-secondary mt-auto' onClick={handleShowEvent4} aria-label="Сазнајте више о Румском културном лету">Детаљније</Button>
                  </Col>
                </Row>
              </Card.Body>
            </AnimatedCard >
          </Col>
        </Row>
    
      <Modal show={showEvent1} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
            <p className='container-text'>
            У Градској библиотеци „Атанасије Стојковић“ у Руми
препозната је идеална прилика да се Рума
позиционира на културној мапи Србије и свих
словенских земаља, славећи дан словенских
апостола, Ћирила и Методија. Први „Дани
словенске писмености и културе“ отворени су на
Градском тргу у Руми 21. маја 2011. године. Након
прве манифестације, све наредне су свечано
отворене у Великој сали Културног центра. Током
15 година свог постојања манифестација је успела
да окупи истакнуте културне јавне личности, са
јасним циљем афирмисања богатог наслеђа
словенских народа. Имали смо част да
угостимо и слушамо беседе академика Матије

Бећковића, Владета Јеротића, Јасминe Грковић
Мејџор, Мухарема Баздуља и других уважених
учесника. Свих ових година одржала су се и бројна
предавања на тему словенске историје, митологије,
књижевности, филма и музике.<br/></p></Col>
<Col md ={12}>
<AnimatedCard>
<div className='container-iframe'>
<iframe
src="https://www.youtube-nocookie.com/embed/2bseDBcsU2U?start=964"
title='Свечано отварање Дана словенске писмености и културе'
allowFullScreen
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
></iframe></div></AnimatedCard>
</Col>
</Row>

               <Row>
         <Col md={12}>
              <p className='container-text'>
              <br/>Почев од седме манифестације, хол Културног
центра постао је место где гости могу да уживају у
калиграфским радовима и иконама, које са великом
посвећеношћу стварају ученици основних школа
општине Рума.
              </p>
              </Col>
             <Col md={6} className='text-center'>
         <AnimatedImage
            className='container-image text-center'
              src={folklor}
              alt="Фолклор" 
            /> 
            <br/><br/><div className="container-icon">
              <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>   </Col>  
                <Col md={6} className='text-center' >
              <AnimatedImage style={{width:'60%'}} className='container-image' alt="икона" src={ikona}/>
            </Col>
           </Row>
          <br/><hr/>
         <Row>    
         <Col md={12} >
               <p  className='container-text text-center'>Уметничком програму ове манифестације јединствену димензију лепоте и креативности дали су: <br/>Aнсамбл народних игара и песама АНИП „Бранко Радичевић“ из Руме;<br/> Oперски певач Бранислав Јатић; <br/> Камерни састав хора карловачке богословије; <br/> Сања Пргоћић, солисткиња на клавиру; <br/>Градски мешовити хор „Никола Ћириловић Ћира“ из Беочина;
        <br/> Еди Тајм, солиста на гајдама; <br/>„Арс футура“- ученици „Музичког кутка“; <br/>Врело, музичка група из Руме; <br/>
         Стефан Бодирожа, солиста на хармоници. 
            </p></Col></Row>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} aria-label="Затвори модал са детаљима о Данима словенске писмености">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEvent2} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>

            <p className='container-text' >Манифестација <em>Дани Атанасија Стојковића</em> сваке године окупља ученике, професоре, истраживаче и љубитеље књижевности у част великог српског просветитеља. Његовим делом и доприносом подробније се баве управо запослени наше установе, који, у настојању да очувају сећање на овог значајног Румљанина, сваке године на дан његовог рођења организују предавања посвећена његовом стваралаштву.
          <br/><br/>

          <strong className='container-text' > ЈУБИЛЕЈ - поводом 250 година од рођења знаменитог Румљанина </strong>
          <hr/>
          Градска библиотека обележила је  2023. годинe јубилеј поводом 250 година од рођења Атанасија Стојковића.
          Од 15. до 20. септембра у сарадњи са Матицом српском и Завичајним музејем
           Рума организовала је низ програма
          са циљем да суграђанима и широј јавности представе богато животно дело знаменитог Румљанина .
              <hr/>Први дан манифестације обележила је изложба „Да ли сте знали о Атанасију Стојковићу“, ауторке Јелене Видаковић, и предавање проф. др Ненада Нинковића
              „Српске сеобе у Русију у 18. веку“. 
               </p> 
               <Row>
               <Col md={6} className='text-center'><AnimatedImage src={izlozbaAtanasije}/></Col>
               <Col md={6} className='text-center'><AnimatedImage src={predavanjeNinkovic}/></Col></Row>
                  <Row>
              <Col md={12} ><hr/>

      <p className='container-text'>
     <br/> У наставку манифестације 18. септембра Градска библиотека је организовала 
квиз „Живот и дело Атанасија Стојковића“ за
ученике виших разреда румских основних школа са
идејом да се и наши млађи суграђани упознају са
његовим ликом и делом.
</p>
  </Col> </Row>     
  <Row>
  <Col md={6} className='text-center'>
     <AnimatedImage className='container-image'  alt ='Квиз' src={kvizOAtanasiju}/>  </Col>
     
     <Col md={6}><div className="container-icon">
     <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div> <hr/>
      <p className='container-text mt-5'>
Наредног дана званично је потписан протокол о сарадњи Матице српске и Општине Рума када је реч о унапређењу квалитета
књижевног, уметничког и образовног рада.
  <hr/>
Након потписивања протокола, у просторијама Градске библиотеке одржан је и 
округли сто „Стваралачки портрет Атанасија Стојковића“, на којем су учествовали професори: Радослав Ераковић, Исидора Бјелаковић и Срђан Орсић.
<br/> Предавање можете погледати на овом линку: <a href='https://www.youtube-nocookie.com/embed/pnPgdfMg38w?start=747' alt='ДАНИ МАТИЦЕ СРПСКЕ- Омаж Атанасију Стојковићу' target='_blank' rel="noreferrer" >Дани Матице српске - Омаж Атанасију Стојковићу</a></p>

</Col>
     </Row>

   
      <hr/>  
<div className="container-icon">
     <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>
  <AnimatedCard> <hr/> <p className='container-text '> Последњи дан манифестације обележио је филм „Бесмртна дела Атанасија Стојковића“ који су суграђани имали прилику да одгледају у Читаоници Градске библиотеке.

<br/>
</p><div className='container-iframe'>
            <iframe 
   src="https://www.youtube-nocookie.com/embed/w4RtolhtK7M?start=46" 
    title="Филм о Атанасију Стојковићу"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
    >    
</iframe></div> </AnimatedCard> 
              <br/><div className='text-center'>
            
           <ul>Ауторка филма: Јелена Видаковић</ul>
          <ul> Нарација: Марина Крањчевић</ul>
          <ul>Лектура: Софија Лакетић Рибић</ul> </div>
          
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} aria-label="Затвори модал са детаљима о Данима Атанасија Стојковића">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEvent3} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <Col md={12}>
              <p className='container-text' >
              Румска књижевна колонија настала је из идеје и потребе да се савремено књижевно стваралаштво што целовитије представи и додатно обогати. Градска библиотека „Атанасије Стојковић“ с поносом истиче да је иницијатива за оснивање Румске књижевне колоније потекла управо из наше установе. Ова манифестација омогућила је међусобно повезивање писаца, афирмацију књижевног стваралаштва, подстицање и популаризацију читања и читалачких навика, као и интензивирање сарадње међу књижевним ствараоцима.
            <br/> </p></Col>
             <Row>
            <Col md={6} className='text-center'>
            <AnimatedImage
             className='container-image'
              src={knjizevnaKolonija2}
              alt="Румска књижевна колонија"
              style={{width:'80%'}}    
            />
            <p>7. Румска књижевна колонија</p>
            </Col>
            <Col md={6} className='text-center'>
            <AnimatedImage
             className='container-image'
              src={knjizevnaKolonija3}
              alt="Румска књижевна колонија"
              style={{width:'130%'}}    
            />
            <p>8. Румска књижевна колонија</p>
            </Col>
            </Row>
            <hr/>
      
 
            <Row>
            <Col md={12} >
            <p className='container-text' >
                У почетној фази Румска књижевна колонија реализована је у сарадњи са Заједницом матичних библиотека и Народном библиотеком Србије, уз чију подршку су успешно организоване прве три Румске књижевне колоније. До сада је одржано укупно осам Румских књижевних колонија, док последње четири године Градска библиотека „Атанасије Стојковић“ самостално преузима организацију овог значајног културног догађаја.

Сваке године Румска књижевна колонија добија посебан креативни печат, будући да теме нису унапред строго дефинисане, већ их аутори обликују у складу са сопственом инспирацијом и стваралачким интересовањима. Радови настали у оквиру Колоније обједињени су у Зборнику, који је структуриран у два дела: у првом делу аутори су представљени као књижевни ствараоци кроз своје биографије и стваралачки опус, док други део доноси оригиналне књижевне радове настале током манифестације, на задату тему. Приступ облику и жанру није ограничен, па аутори имају потпуну слободу израза, што управо и представља посебну вредност и чар разноликости овог Зборника.


            </p></Col></Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} aria-label="Затвори модал са детаљима о Румској књижевној колонији">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal> 

 
      <Modal show={showEvent4} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <p className='container-text'>
              <Row>
              <Col md={6}>
              <AnimatedImage
              style={{marginLeft:'-4px'}}
              className='container-image'
              src={rumskoKulturnoLeto2}
              alt="Румско културно лето"
            /></Col> 
    
            <Col md={6}><br/>Румско културно лето je манифестација која се већ
традиционално одржава у Руми у периоду од 28.
јуна до 30. августа. Румљани и сви посетиоци нашег
града сваке године имају прилику да прате богат
културно-уметнички програм. У оквиру
прошлогодишњег Културног лета одржавани су:
концерти, позоришне представе, ликовне изложбе,
предавања из различитих области културе, као и
књижевни догађаји. 

 </Col></Row><br/>Општина Рума је покровитељ ове манифестације, а
у реализацији програма учествују Културни центар
„Брана Црнчевић“, Завичајни музеј, Градска
библиотека „Атанасије Стојковић“ и Туристичка
организација Општине Рума. У оквиру Румског
културног лета, Градска библиотека организује
различите културне догађаје који обогаћују
друштвени и уметнички живот нашег краја. Тако су у
складу са традицијом библиотеке, представљене
књиге које су добиле значајна признања у
литератури, као и представе, од којих се посебно
истиче монодрама „Музеј живих људи: Голооточка

сага“ у изведби Јовице Јашина, по тексту
Драгољуба Јовановића. Одржан је и хуманитарни
концерт који је окупио љубитеље музике уз посебну
пажњу на хуманитарни карактер догађаја.
<br/>Сви ови догађаји потврђују значај културних
активности у Руми и њеним институцијама,
пружајући платформу за креативност и размену идеја.
            </p>   
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} aria-label="Затвори модал са детаљима о Румском културном лету">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Image Modal */}
      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />
        </Container> 
    </>
  );
};

export default Events;
