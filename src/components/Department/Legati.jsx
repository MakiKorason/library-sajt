import { Col, Container, Row } from "react-bootstrap"
import Legat1 from '../../images/Legat1.webp'
import Legat2 from '../../images/Legat2.webp'
import Legat3 from '../../images/Legat3.webp'
import AnimatedImage from "./AnimatedImage";
import { LiaBookSolid } from "react-icons/lia";
import { Helmet } from 'react-helmet-async';


const Legati= ()=>{
   return(
    
    <>
       
         <Helmet>
  <title>Легати – Библиотека Рума</title>
  <meta
    name="description"
    content="Колекција легата Николе Дреновца, Милутина Стојковића и Оливере Шијачки у Градској библиотеци Рума."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/legati-biblioteke" />

  {/* Open Graph */}
  <meta property="og:title" content="Легати – Библиотека Рума" />
  <meta
    property="og:description"
    content="Колекција легата Николе Дреновца, Милутина Стојковића и Оливере Шијачки у Градској библиотеци Рума."
  />
  <meta property="og:url" content="https://www.bibliotekaruma.rs/legati-biblioteke" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Легати – Библиотека Рума",
      "description": "Колекција легата Николе Дреновца, Милутина Стојковића и Оливере Шијачки у Градској библиотеци Рума.",
      "url": "https://www.bibliotekaruma.rs/legati-biblioteke",
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
            "name": "Завичајно",
            "item": "https://www.bibliotekaruma.rs/zavicajno"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Легати",
            "item": "https://www.bibliotekaruma.rs/legati-biblioteke"
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

     <Container className='container-library mt-4 mb-4 '>
        <div className="container-frame">
    <Row> <h1 className="container-title" >Легати</h1> 
    <div className="container-icon">
                       <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div> 
     <hr />
     <Col md={12}>
     <p className="container-text">
    Румска библиотека, као једна од најзначајнијих културних установа у нашем граду, која за циљ има очување, неговање и промовисање књиге и читалаштва, у свом раду има и задатак сакупљања и очувања уметничких стваралаштва значајних писаца.
  </p>
  <p className="container-text">
    Мотив за формирање легата Градске библиотеке у Руми је био обогаћивање фонда за добробит корисника, као и сведочанство о времену и људима.
  </p>
  <p className="container-text">
    Легати су значајни јер пружају могућност за исцрпнија истраживања једне области или једног предмета. Они су и незаменљив документ при проучавању живота и рада легатора.
    </p>
    <hr/>
     </Col>
  
   <Row className="text-center" >
    <Col md={4} className="text-center"> 
    <AnimatedImage src={Legat1} alt="Легат Николе Дреновца" style={{ transform: 'rotate(220deg)' }} />
</Col>
   <Col md={4} className="text-center"> 
   <AnimatedImage src={Legat2} alt="Легат Милутина Стојковића" style={{ transform: 'rotate(220deg)' }} />
    </Col>
    <Col md={4} className="text-center">
    <AnimatedImage src={Legat3} alt="Легат Оливере шијачки" /> 
     <div className="container-icon">
      <br/><LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div></Col></Row>

  <Col  md={12}>
    <br/><hr/> <h2 className="container-title">Легат Николе Дреновца</h2>    
  <p className='container-text'>Никола Дреновац, свештеник, књижевник и преводилац, рођен је у Руми 17. децембра 1907. године. У Словенији и Срему је радио као свештено лице, па затим одлази у Америку. По завршетку Другог светског рата враћа се у Југославију где ради као уредник „Слободне речи“, „Просвете“ и Литерарне редакције „Радио Београда“.</p>
  <p className='container-text'>Никола Дреновац је почетком својих тридесетих година почео да пише поезију и прозу. Посебно место у његовом стваралаштву заузимају деца, којима је са много поштовања, љубави и оригиналности даривао неке од најлепших стихова.</p>
  <p className='container-text'>Као један од најзначајнијих песника послератне Југославије, Никола Дреновац, својим књижевним опусом заслужује уважавање и поштовање својих суграђана. Управо због тога Градска библиотека „Атанасије Стојковић“ у склопу свог фонда поседује и Легат Николе Дреновца. Легат је формиран 1996. године, има 287 публикација које су обрађене у складу са свим библиотечким правилима и стандардима.</p>
  <p className='container-text'>Свака обрађена публикација има свој инвентарни број, сигнатуру и УДК број и статус архивског примерка. Легат садржи дела која највећим делом припадају периоду од 60-тих до 90- тих година прошлог века. Ту су монографске публикације које се већином баве књижевношћу, а незнатан број публикација припада стручној литератури.</p>
    </Col> 
    <hr/>

          <h2 className="container-title">Легат Милутина Стојковића</h2> 
  
         <Col md={12}>

         <p className="container-text">
           <br/>Легат проф. др Хаџи Милутина Стојковића, угледног универзитетског и политичког радника и стручњака, спада у оне легате који су живи и чији се обим фонда активношћу легатора, проширује.</p>
  <p className='container-text'>Овај легат је посебан јер се у њему налази преко 46 уџбеника које је легатор написао. Претежно из предмета статистике, медицине, пољопривреде, економије и четири монографије страних држава и градова. Ту су и наслови из области религије и деловања Српске православне цркве.</p>
  <p className='container-text'>Све књиге овог легата су обрађене, а поклоњене књиге, документи и други поклони могу се користити само у Читаоници Градске библиотеке. Легат чине и документи и материјали са међународних скупова, и конференција којима је др Стојковић присуствовао.</p>
  <p className='container-text'>С обзиром на дугогодишњи просветни рад проф. др Стојковића, у легату се налази већи број дипломских радова студената који су код њега дипломирали.</p>
  <p className='container-text'>Легатор, проф. др Милутин Стојковић се обавезао да ће о легату обавештавати јавност и повремено излагати и упознати је са деловима грађе, што и чини сваком пригодном приликом.</p>
        </Col>
         
      <hr/>
      <h2 className="container-title" >Легат Оливере Шијачки</h2>
        <Col md={12}> 
  <p className='container-text'><br/> Спомен збирка Оливере Шијачки представља физички одвојену целину од остатка фонда наше библиотеке и носи назив „Спомен збирка Оливере Шијачки“.</p>
  <p className='container-text'>Оливера Шијачки је рођена у Новом Саду 1938. године, где је завршила Филозофски факултет и где је живела и радила. Удајом улази у породицу Шијачки, која води порекло из Вогња, па отуда и жеља наследника да се баш нашој библиотеци и граду Руми подари њена спомен збирка.</p>
  <p className='container-text'>Оливера је писала највише поезију, а највећи део свог стваралаштва посветила је писању за децу, зато и не чуди што је постала један од заштитних знакова Змајевих дечијих игара.</p>
  <p className='container-text'>Спомен збирка Оливере Шијачки броји 603 публикације, међу којима су монографске и серијске публикације, као и легаторове књиге. Публикације унутар збирке највећим делом припадају периоду седамдесетих и осамдесетих година прошлог века, мада значајан број припада и првој деценији новог миленијума.</p>
  <p className='container-text'>Значајан део ове збирке су дечије књиге, од којих је 54 на српском језику, док је осталих 27 на страном језику, претежно македонском и руском.</p>
  <p className='container-text'>Спомен збирка Оливере Шијачки поред своје књижевне и културне вредности посебна је и због тога што све публикације које се налазе у збирци имају посвету легатору, преко 95% посвета, од којих се истичу: Мирослав Антић, Перо Зубац, Гроздана Олујић и Драшко Ређеп. Посвете исписане у публикацијама у већини случајева откривају природу односа Оливере Шијачки и поменутих аутора.</p>
    </Col>
    

 
     <hr />
    </Row>
    </div>
     </Container>
    </>
    )
}

export default Legati