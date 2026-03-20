import {  Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import konkurs from '../../images/konkurs.webp'
import AnimatedCard from '../Department/AnimatedCard'; 
import { Helmet } from 'react-helmet-async';
const Competition =()=>{
  
    return (<>
     
        <Helmet>
  <title>Конкурс – Библиотека Рума</title>
  <meta
    name="description"
    content="Конкурс за први необјављени роман на српском језику отворен од 21. јула до 15. новембра 2025."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/konkurs-biblioteke" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Library",
      "name": "Градска библиотека „Атанасије Стојковић "Рума",
      "url": "https://www.bibliotekaruma.rs/konkurs-biblioteke",
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

     <Container className="container-library mt-4 mb-4 ">
      <Row >
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
          <h1 className="container-title">КЊИЖЕВНИ КОНКУРС „АТАНАСИЈЕ СТОЈКОВИЋ“</h1>
          <p style={{textAlign:'center'}} className="container-text">
            За први необјављени роман на српском језику
          </p>
        </Col>       </Row>

        <Col md={12} className='text-center'> <AnimatedCard><img  src={konkurs} alt="Конкурс - илустрација" style={{width:'20%'}} loading="lazy"/></AnimatedCard> </Col>


            <div className="container mt-3">
  <h2 className='container-title'>Конкурс се односи:</h2>
</div>
<AnimatedCard>
<div className="container mt-3">
  <ul className="list-group list-group-flush " >
    <li className="list-group-item container-text">  На први, до сада необјављени роман написан на српском језику.</li>
    <li className="list-group-item container-text">  Право учешћа на Конкурсу имају аутори из Србије и расејања.</li>
    <li className="list-group-item container-text">   Конкурс је отворен од 21. јула до 15. новембра 2025. године.</li>
    <li className="list-group-item container-text"> 

Рукописе на конкурс треба доставити у 3 машински или компјутерски откуцана примерка у PDF или WORD формату заједно са попуњеним обрасцем за пријаву.
                   <br/>Образац можете преузети овде: 
                    <br/><Button
  onClick={() => window.open('/Конкурс.pdf', '_blank')}
  className='btn btn-secondary btn-sm'
  aria-label="Преузми захтев за пријаву на конкурс"
>
Преузми захтев
</Button>
</li>
    <li className="list-group-item container-text"> 
Као аутор, дужни сте да своје дело под шифром (коју ћете назначити на штампаном примерку) доставите у две форме:
<br/>• штампаној (одштампан рукопис),
<br/>• електронској (на USB-у или CD-у).
<br/><br/>
Разрешење шифре, које треба да садржи Ваше податке (име и презиме, место становања, адресу, број телефона и e-mail), ставља се у мању затворену коверту.
<br/><br/>
Затим, штампано и електронско издање рукописа, заједно са малом ковертом, одлажу се у велику A4 коверту.
<br/><br/>
Жири дело чита искључиво под шифром, а коверта са подацима отвара се само уколико је рад награђен, како би се обезбедила потпуна анонимност и непристрасност при одлучивању.
                  </li>
    <li className="list-group-item container-text">   Пристигле рукописе оцењиваће трочлани жири састављен од једног књижевника, једног
                  књижевног критичара и једног представника Градске библиотеке „Атанасије Стојковић”.</li>
    <li className="list-group-item container-text">          Градска библиотека „Атанасије Стојковић” сноси сву одговорност око лектуре и коректуре
                  награђеног романа, око уређења издања и техничке опремљености награђеног романа. </li>
    <li className="list-group-item container-text">      Радове слати на адресу:
Градска библиотека „Атанасије  Стојковић“
(за Конкурс „Атанасије Стојковић“)
Главна 114,
22400 Рума </li>
<li className="list-group-item container-text">     Додатне информације можете добити на тел. 060/505-39-23 (Ивана Костадиновић) или на
                  мејл адресу: gbasruma@gmail.com       </li>
  </ul>
</div>
        </AnimatedCard>
                
    </Container>
    </>)
}

export default Competition