import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import zavicajno from '../../images/zavicajno.webp'
import AnimatedImage from "./AnimatedImage";
import { Helmet } from 'react-helmet-async';

const Homelend =()=>{
return (<>
<Helmet>
  <title>Завичајно одељење – Библиотека Рума</title>
  <meta
    name="description"
    content="Завичајна збирка Градске библиотеке Рума броји преко 3.000 библиотечких јединица, укључујући монографије, периодику и некњижну грађу."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/zavicajna-zbirka" />

  {/* Open Graph */}
  <meta property="og:title" content="Завичајно одељење – Библиотека Рума" />
  <meta
    property="og:description"
    content="Завичајна збирка Градске библиотеке Рума броји преко 3.000 библиотечких јединица, укључујући монографије, периодику и некњижну грађу."
  />
  <meta property="og:url" content="https://www.bibliotekaruma.rs/zavicajna-zbirka" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Завичајно одељење – Библиотека Рума",
      "description": "Завичајна збирка Градске библиотеке Рума броји преко 3.000 библиотечких јединица, укључујући монографије, периодику и некњижну грађу.",
      "url": "https://www.bibliotekaruma.rs/zavicajna-zbirka",
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
            "name": "Завичајна збирка",
            "item": "https://www.bibliotekaruma.rs/zavicajna-zbirka"
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

 <Container  className="container-library mt-4 mb-4">
  <section aria-labelledby="zavicajna-naslov">
 <div className="container-frame">
      <Row>
        <h1 className="container-title" id="zavicajna-naslov">ЗАВИЧАЈНА ЗБИРКА</h1>
  <div className="container-icon">
               <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div><hr/>
   
        <Col md={12} >
          <p className="container-text">
          Градска библиотека „Атанасије Стојковић“ у Руми
интензивно ради на сакупљању грађе за Завичајни
фонд након што је донесен војвођански закон о
библиотекама 1974. године. Данас Завичајна
збирка обухвата преко 3.000 библиотечких
јединица, које су обрађене по свим библиотечким
стандардима. </p></Col>
        
    <Col md={12} className="text-center">
            <AnimatedImage src={zavicajno} alt="Физика Атанасија Стојковића" className='container-image'/></Col>
 
 
      <Col md={12}>
          <br/>
          <p className="container-text">Монографских публикација има 2.285, периодике 125, док остатак представља некњижну грађу. Монографске публикације у збирци су сложене по формату, а некњижна грађа према УДК.</p>
          <p className="container-text">Монографске публикације највећим делом обухватају белетристику, монографије, самоуправне акте предузећа и установа, научне радове у облику сепарата или зборника који су добијени од аутора на поклон.</p>
          <p className="container-text">Серијске публикације обухватају новине и часописе, док се некњижна грађа односи на плакате, разгледнице, позивнице и остали ситан штампани материјал.</p>
          <p className="container-text">Публикације из фонда Завичајне збирке не износе се ван библиотеке, већ се користе искључиво у Читаоници. У већини случајева корисницима се дају дупликати или фотокопије.</p>
          <p className="container-text">Најзначајнија публикација је „Фисика...” Атанасија Стојковића, штампана у три тома у Будиму 1801–1803. године.</p>
          
          
         <hr/> </Col> </Row>

        </div>
   
    </section>
    </Container>

   

</>)
}

export default Homelend