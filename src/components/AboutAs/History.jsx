import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import DJNA from '../../images/DJNA.webp'
import DJNA1 from '../../images/DJNA1.webp'
import AnimatedImage from '../Department/AnimatedImage';
import AnimatedCard from '../Department/AnimatedCard'; 
import { Helmet } from 'react-helmet-async';
const History = () => {

  return (
    <>
     <Helmet>
  <title>Историјат – Библиотека Рума</title>
  <meta
    name="description"
    content="Историјат Градске библиотеке „Атанасије Стојковић“ у Руми, њена зграда и значај у локалној заједници."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/istorijat-biblioteke" />
  <link rel="alternate" hreflang="sr" href="https://www.bibliotekaruma.rs/историјат-библиотеке" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Library",
      "name": "Градска библиотека „Атанасије Стојковић "Рума",
      "url": "https://www.bibliotekaruma.rs/istorijat-biblioteke",
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

    <Container className="container-library mt-4 mb-4  ">
 <div className="container-frame">
      <Row>     
        <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 className='container-title'>Историјат библиотеке</h1>
          <hr  />
          <p className="container-text">
           Градска библиотека „Атанасије Стојковић“ у Руми,
као најстарија културна институција у овом крају, од
самог оснивања игра значајну улогу у очувању и
промоцији културе и образовања. Иако је једно
време била интегрисана у рад Културног центра,
1991. године одлуком Скупштине општине Рума,
библиотека је постала самостална установа, носећи
назив Градска библиотека. Овај корак јој је
омогућио да настави са својом мисијом и
деловањем као независна културна институција, па
је 2011. године своје име обогатила именом
српског научника и просветитеља,
Атанасија Стојковића.
        <br/><br/>За свој рад добила је значајна друштвена и
професионална признања.
<br/>Навешћемо само нека: 
<br/>1954. год. -
Награда савета за просвету и културу НР
Србије;
<br/> 1986. год. - Повеља Културно-просветне заједнице Србије; 
<br/> 1988. год. -
Награда „Доситеј Обрадовић“ подружнице
библиотекара Срема.<br/><br/> 
Од 2007. године пуноправна је чланица COBISS.SR,
а од јула 2010. године укључена је у стварно
COBISS/OPAC окружење и све услуге корисницима
пружа преко овог сервиса. Свети Јован Богослов је

заштитник Градске библиотеке, и тај дан се као
слава обележава од 2007. године.
 </p></Col></Row>

         <Row>
         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h2 className='container-title'> Нова зграда библиотеке</h2><hr/>
          <p className='container-text'>Након више од седам деценија Градска библиотека
„Атанасије Стојковић“ је пресељена на нову
локацију. Услед повећања броја публикација, услуга
које пружа, техничке опремљености, као и потребе
корисника, уз подршку локалне самоуправе
пронашло се решење у виду адаптације зграде
Дома војске.</p></Col>  <hr/>
<AnimatedCard className='container-iframe'>
<iframe
     src="https://www.youtube-nocookie.com/embed/ec6NLWV8qaM"
        title="Example Website"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
      ></iframe> </AnimatedCard>
           
       </Row>

        <Row> 
        
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <br/><br/><hr/><br/><p className='container-text'>Зграда је споменик културе, и на тај начин се ово
здање чува од заборава, дајући му нову функцију у
виду културног средишта локалне заједнице, кроз
рад савремене библиотеке. Објекат је изграђен у
стилу тада веома модерне сецесије и Хисторизма и
припада периоду Југендштила. Градња је завршена
1912. године, под надзором пројектанта Осјечанина
Виктора Аксмана. </p><hr/>
         </Col>
           <Col xs={12} sm={12} md={6} lg={6} xl={6} className='mt-2'>
          <AnimatedImage 
            src={DJNA1}
            alt="Дом војске" 
            className='container-image'
          /> <br/> <br/></Col>
         </Row>
          
          <Row>    <br/><h3 className='container-title'>Архитектонски опис</h3><hr/>
     <Col xs={12} sm={12} md={6} lg={6} xl={6} >
          <p className='container-text'>На југозападном углу раскрснице Главне и улице
Владимира Назора је двоспратна зграда,
зарубљеног прочеља са мањим троделним тремом
ослоњеним на два снажна вретенаста стуба. Изнад
се налази велики двокрилни полукружни прозор.</p>
        
           <AnimatedImage
            src={DJNA}
            alt="Слика старе библиотеке" 
            className='container-image mt-1'
          /></Col> 

          <Col md={6} >
          <p  className='container-text'>
          У главну зграду узидане су две идентичне фигуре
деке који унуку предаје тамбурицу, која је
романтичарски симбол очувања и наставка
националне традиције.
Скулптура је названа по песми „Деда и унук“,
Јована Јовановића Змаја. <br/><br/><br/>Пространа луковичаста купола,  са шиљастим декоративним
завршетком, чини врх главне зграде. Посебни
естетски доживљај дају овални прозори са бојеним
сткленим пољима. Са обе стране, у обе улице, на
централну зграду се наслањају симетрична
приземна крила. На северном крилу се налазе три
прозора, а на источном пет мањих.<hr/>
           </p> </Col>
           <Col md={12} className='mt-3'> <p className='container-text'>Зграда Градске библиотеке „Атанасије Стојковић“ представља пример јединственог
архитектонског стваралаштва, са изразитим карактеристикама средњоевропске
сецесије, уз знатно присуство елемената традиционалне архитектуре.</p></Col>
          <hr />
      </Row>
      </div>
    </Container>

    </>
  
  );
};

export default History;
