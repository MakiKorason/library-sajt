import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import './Employees.css';
import { GiBookshelf } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { ImUserTie } from "react-icons/im";
import { LiaUserEditSolid } from "react-icons/lia";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import AnimatedCard from '../Department/AnimatedCard'; 
import { Helmet } from 'react-helmet-async';
const Employees = () => {
    return (
<>
<Helmet>
  <title>Запослени – Библиотека Рума</title>
  <meta
    name="description"
    content="Сазнајте више о стручном тиму Градске библиотеке „Атанасије Стојковић“ у Руми и одељењима у којима раде."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/zaposleni-biblioteke" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Library",
      "name": "Градска библиотека „Атанасије Стојковић" Рума",
      "url": "https://www.bibliotekaruma.rs/zaposleni-biblioteke",
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

     <Container className="container-library ms-auto  mt-4 mb-4"> 
   <div className="container-frame">
       <Row>
        <h1 className="container-title">Запослени</h1><div className="container-icon">
            <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>
        <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
          <p className="container-text">
          <br/>Градска библиотека „Атанасије Стојковић“ у Руми,
оспособљена је за стручно и квалитетно обављање
библиотечке делатности, поштујући и примењујући
принципе и стандарде које савремено
библиотекарство поставља пред установе задужене
за обезбеђење јавног интереса у овој области
културе и информисања. Сви библиотекари
запослени у Градској библиотеци „Атанасије Стојковић" лиценцирани су за рад у
COBISS програмском окружењу. Библиотека
значајну пажњу посвећује и оспособљавању младих
за обављање ове делатности, укључујући се
у програм стручне праксе у сарадњи са
Националном службом за запошљавање.    <br/>
          </p>
        </Col>  
          <Col xs={12} sm={12} md={12} lg={12} xl={12} >    
           <AnimatedCard className="employee-card  mb-4 shadow-sm">
             <Card.Body>
             <br/> <h2 className="text-center employees-text">Одељење за одрасле</h2><hr/>
               <p className="employees">Библиотекар: Марина Крањчевић </p>
               <p className="employees">Библиотекар: Софија Лакетић Рибић</p> 
                 <p className="employees">Библиотекар: Маријана Даничић</p> 
               <br/><h2 className="text-center employees-text">Одељење за децу</h2><hr/>
               <p className=" employees">Библиотекар: Ивана Костадиновић</p>
               <p className=" employees ">Библиотекар: Маријана Бизумић</p>     
               <GiBookshelf className="container-icon"/>              
                 <IoBookSharp className="container-icon"/><LiaUserEditSolid className="container-icon" /><br/><br/>            
               <br/><h2 className="text-center employees-text">Одељење научне и стручне литературе</h2><hr/>
               <p className=" employees">Библиотекар: Александра Мандић</p>
               <p className="employees">Библиотекар: Маја Зорић</p>
               <p className="employees ">Библиотекар: Алекса Кондић</p>    
              <br/>   <h2 className="text-center employees-text">Завичајна збирка</h2><hr/>
               <p className="text-center employees">Виши библиотекар:<br/> Драгана Ђорђевић</p>      <br/> 
               <br/>  <h2 className="text-center employees-text" >Читаоница</h2><hr/>
               <p className="employees">Књижничар: Јулка Јанић </p>
               <p className="employees">Књижничар: Драган Јанковић </p>
             </Card.Body>
         </AnimatedCard > </Col>  

      

    <Col md={12}  >
             <AnimatedCard className="employee-card  mb-4 shadow-sm">
             <Card.Body>
               <h2 className="text-center employees-text">Директор</h2>
                  <ImUserTie className="container-icon" />
               <p className="text-center employees">Дамир Васиљевић Тоскић</p>
             </Card.Body>
           </AnimatedCard> 
       

           <AnimatedCard className="employee-card  mb-4 shadow-sm">
             <Card.Body>
               <h2 className="text-center employees-text">Администрација</h2><hr/>
               <p className="text-center employees"><br/>Финансијско-рачуноводствени сарадник: Јована Маринковић </p>
               <CiMoneyCheck1 className="container-icon" />
              <p className="text-center employees"><br/>Правно административно финансијски референт: Бранка Стојковић Поповић  </p>
             </Card.Body>
           </AnimatedCard>
   
           <AnimatedCard className="  employee-card  mb-4 shadow-sm">
            <Card.Body>
           <h2 className="text-center employees-text">Одржавање</h2><hr/>
               <p className=" text-center employees">Хигијеничар-спремачица: Бранкица Угреновић </p>
               <br/><FaTools  className="container-icon" />
               <p className="text-center employees"><br/>Техничар за одржавање аудио-видео система и остале опреме: Драган Маричић </p>
            </Card.Body>
           </AnimatedCard> 
    </Col>
      </Row>           </div>      
            
         </Container>
         </>
    );
};

export default Employees;