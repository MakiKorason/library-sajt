import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import decije from '../../images/decije.webp'
import { LiaBookSolid } from "react-icons/lia";
import isidora from '../../images/isidora.webp'
import AnimatedImage from "./AnimatedImage";import { Helmet } from 'react-helmet-async';
const Kid =()=>{
    return (<>

           <Helmet>
  <title>Одељење за децу – Библиотека Рума</title>
  <meta
    name="description"
    content="Одељење за децу Градске библиотеке Рума броји око 18.000 публикација и организује радионице, литерарне конкурсе и културне догађаје."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/odeljenje-za-decu" />

  {/* Open Graph */}
  <meta property="og:title" content="Одељење за децу – Библиотека Рума" />
  <meta
    property="og:description"
    content="Одељење за децу Градске библиотеке Рума броји око 18.000 публикација и организује радионице, литерарне конкурсе и културне догађаје."
  />
  <meta property="og:url" content="https://www.bibliotekaruma.rs/odeljenje-za-decu" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Одељење за децу – Библиотека Рума",
      "description": "Одељење за децу Градске библиотеке Рума броји око 18.000 публикација и организује радионице, литерарне конкурсе и културне догађаје.",
      "url": "https://www.bibliotekaruma.rs/odeljenje-za-decu",
      "inLanguage": "sr",
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
            "name": "Одељења",
            "item": "https://www.bibliotekaruma.rs/odeljenja"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Одељење за децу",
            "item": "https://www.bibliotekaruma.rs/odeljenje-za-decu"
          }
        ]
      },
      "mainEntity": {
        "@type": "Library",
        "@id": "https://www.bibliotekaruma.rs/#organization",
        "name": "Градска библиотека „Атанасије Стојковић“ Рума",
        "url": "https://www.bibliotekaruma.rs/",
        "logo": "https://www.bibliotekaruma.rs/logo.webp",
        "sameAs": [
          "https://www.facebook.com/BibliotekaRuma",
          "https://www.instagram.com/bibliotekaruma",
          "https://www.youtube.com/channel/CHANNEL_ID"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Трг Слободе 1",
          "addressLocality": "Рума",
          "postalCode": "22400",
          "addressCountry": "RS"
        },
        "telephone": "+381 22 424-501",
        "email": "info@bibliotekaruma.rs"
      }
    }
    `}
  </script>
</Helmet>

    <Container className="container-library mt-4 mb-4">
         <div className="container-frame"><h1 className="container-title" > ОДЕЉЕЊЕ ЗА ДЕЦУ</h1><div className="container-icon">
          <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>   <hr/><br/>
      <Row>
        <Col md={12} className="mb-3">
          <p className='container-text mb-0'>Одељење за децу броји око 18.000 публикација. Фонд је уређен по УДК систему и унутар група уазбучен. Богат је бројним двојезичним књигама, сликовницама, лектирама, моторичким књигама, звучним књигама и енциклопедијама.</p>
          <p className='container-text mb-0'>Одељење за децу је организовано у две просторије. Прва просторија је намењена за публикације које су изложене за читаоце. Друга просторија је намењена за радионице у којима учествују наши најмлађи корисници: бројне вртићке групе, ученици основних школа, као и неки разреди средњошколаца.</p>
          <p className='container-text mb-0'>Успешну сарадњу поред државних образовно-васпитних институција, остварујемо и са Дневним боравком „Солидарност“, приватним: школицама језика, чуваоницама деце и са музичким школицама.</p>
          <p className='container-text mb-0'>Свако одељење за децу, па тако и наше, представља место на ком се рађају и стварају будући љубитељи књига. Из тог разлога негујемо вишегодишњу традицију доделе бесплатних чланских картица првацима и предшколцима.</p>
        </Col>
        <Col md={12} className="text-center" >
        <AnimatedImage src={decije} alt="Дечије одељење" className='container-image'/></Col>
          
      </Row>
    
      <Row>       <br/><h2 className="container-title" > <br/>Културни кутак </h2>  <br/><hr/>
        <Col md={6}>
      <br/><p className="container-text">На Одељењу за децу наше библиотеке одржавали
су се бројни литерарни конкурси поводом
Међународног дана детета и поводом Светског
дана дечије књиге. Неки од њих су: „Имам и ја своја
права“ и „Моја модерна бајка“.<br/> Библиотека сваке
године обележава и Светски дан поезије, уз
музичке тачке и дечије рецитације.
<br/><hr/>И дан Светог Саве је посебан дан за нашу установу
као и за друге културно-образовне институције.

Путем занимљивих прича о Растку Немањићу деца
уче о томе ко је он био, и колико је заслужан за
развој српског школства.
<br/><hr/>
Простори наше библиотеке су увек радо отворени,
па смо већ две године заредом, са посебним
задовољством, угостили учеснике општинске
смотре рецитатора: „Песниче народа мог“.
Као домаћини овог значајног такмичења, које
традиционално организује Основна школа „Душан
Јерковић“, пружили смо подршку младим талентима
у њиховом креативном изражавању. </p>
        
<div className="container-icon">
<LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div> 
       </Col>
        <Col md={6} className="mt-5">
        <AnimatedImage src={isidora} alt="Радионица: Исидора Мун" className='container-image'/>
           <br/>
        </Col>
        <Col md={12}>
            <p className="container-text" >Водећи се
јасном мисијом, библиотекари наше установе често
организују радионице за децу, које укључују
читање, креативне активности и учење кроз игру. </p></Col>
      </Row> 
    </div>    </Container>
    </>)
}
export default Kid