import React, { useState } from 'react';
import {  Row, Col,  Container, Button, Nav } from 'react-bootstrap';

import { Helmet } from 'react-helmet-async';
import './Recommendations.css';
import AnimatedCard from '../Department/AnimatedCard'; 

const RECOMMENDATION_ARCHIVE_MONTHS = [
 
  ['januar', 'Јануар'],
  ['februar', 'Фебруар'],
  ['mart', 'Март'],
  ['april', 'Април'],
];

const Recommendations =()=>{

  const [activeKey, setActiveKey] = useState('april');
  const [activeKeyDeca, setActiveKeyDeca] = useState('april');
  const [activeKeyNaucno, setActiveKeyNaucno] = useState('april');

    
   
 
    return (

            <><Helmet>
  <title>Препоруке библиотекара - Библиотека Рума</title>
  <meta name="description" content="Издвојене препоруке библиотекара Градске библиотеке 'Атанасије Стојковић' у Руми. Препоручујемо најзанимљивија и најчитанија дела за све узрасте." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/preporuke-bibliotekara" />
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Препоруке библиотекара - Библиотека Рума",
      "url": "https://www.bibliotekaruma.rs/preporuke-bibliotekara",
      "description": "Издвојене препоруке библиотекара Градске библиотеке 'Атанасије Стојковић' у Руми. Препоручујемо најзанимљивија и најчитанија дела за све узрасте.",
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
    `}
  </script>
</Helmet>
<h2 className='container-title mb-2 mt-5'>Препоруке библиотекара</h2><hr/>

<Container className='container-library mb-4 mt-4 ms-auto' style={{ padding: '2.5rem' }}>
  <AnimatedCard className="container mt-3, mb-5">

    <br/>

    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          data-bs-toggle="tab"
          style={{ color: '#3f2c11' }}
          href="#menu3"
        >
          Одељење за одрасле
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          style={{ color: '#3f2c11' }}
          href="#menu1"
        >
          Дечије одељење
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          style={{ color: '#3f2c11' }}
          href="#menu2"
        >
          Научно одељење
        </a>
      </li>
    </ul>

    <div className="tab-content">

      {/* Дечије одељење */}
      <div id="menu1" className="container tab-pane fade">
        <br/>
        <h3 className="container-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>Месечна препорука — Дечије одељење</h3>
        <Row>
          <Col xs={12} md={4} lg={4} className="text-center mt-2 mt-md-0">
              <img
                src="https://www.malasrpskaprodavnica.com/user/include/etno/images/items/knjiga_knjiga_slucajnosti.jpg"
                alt="Књига случајности — Оса Линд"
                loading="lazy"
                width="300"
                height="450"
                itemProp="image"
                referrerPolicy="no-referrer"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  marginTop: '2rem'
                }}
              />
          </Col>

          <Col xs={12} md={8} lg={8}>
            <p className='container-text'>
              <strong>Наша препорука</strong><br/>
              <strong>Дечје одељење</strong><br/><br/>
              <strong>Аутор:</strong> Оса Линд<br/>
              <strong>Наслов:</strong> „Књига случајности"<br/><br/>
              Када дванаестогодишња Хана Деметер пронађе „Књигу случајности“, једна прочитана реченица заувек мења њен свет. Та мистериозна књига писана је само за њу, али Хана тек треба да открије ко ју је написао и због чега. Оно што је до тада деловало као врло компликован живот претвара се у низ узбудљивих авантура, испуњених новим пријатељствима, али и тајнама и опасностима.
              <br/><br/>
              Овај роман намењен је деци узраста од 11 до 15 година, али ће лако освојити и старије читаоце својом маштовитом причом и неизвесношћу.
            </p>
            <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru&q=%D0%9E%D1%81%D0%B0+%D0%9B%D0%B8%D0%BD%D0%B4"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Остала дела Славенке Дракулић коју поседује наша библиотека"
                        style={{marginTop: '0.5rem'}}
                      >
                        Остала дела овог аутора којe поседује наша библиотека
                      </Button>
          </Col>
        </Row>

        <Row><br /><hr />
          <Col md={3}>
            <Nav variant="pills" className="flex-column" activeKey={activeKeyDeca} onSelect={(k) => k && setActiveKeyDeca(k)}>
              {RECOMMENDATION_ARCHIVE_MONTHS.map(([key, label]) => (
                <Nav.Item key={key}>
                  <Nav.Link eventKey={key} className="container-text">{label}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col md={9}>
            {activeKeyDeca === 'april' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://jrjmojizdavac.com/wp-content/uploads/2024/10/putokazi-srpskih-velikana-1200x1200-1-600x600.jpg"
                    alt="Путокази српских великана — Ђурђа Покрајац"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за април — Дечије одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Ђурђа Покрајац<br/>
                    <strong>Наслов:</strong> „Путокази српских великана"<br/><br/>
                    Ова лепа и корисна књига води нас кроз животе 13 величанствених личности које су оставиле неизбрисив траг градећи темеље наше науке и културе.
                    Књига је обогаћена илустрацијама, фотографијама и QR кодовима који откривају нове детаље и приче.
                    Ауторка подстиче младе читаоце да самостално наставе с праћењем путоказа тако што ће посетити најближе музеје, спомен-куће, галерије и библиотеке. Тако читање постаје прави истраживачки подухват, а важна порука на том путу јесте да се успех ствара трудом и вером у себе, о чему сведоче животи и дела наших великана.
                  </p>
                </Col>
              </Row>
            )}
                {activeKeyDeca === 'mart' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://www.slglasnik.com/storage/file-manager/products/import/217085/217085_1.jpg"
                    alt="Наслов уместо шешира-Наталија Трновац"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за март — Дечије одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Наталија Трнавац<br/>
                    <strong>Наслов:</strong> "Наслов уместо шешира"<br/><br/>
                     Ова збирка маштовитих и разиграних прича говори о самим причама, писању и о односу писца и ликова, који овде нису пасивни. Они улазе у текст, разговарају и преговарају са аутором, померајући границе приповедања.
У основи сваке приче уткана је једноставна, али важна порука - потреба да у себи сачувамо искру детињства, слободе и маште, коју често изгубимо одрастањем. Управо због тога, књига се обраћа и одраслима.
Пред вама је дело које се чита, гледа и слуша, али пре свега - ослушкује.
                  </p>
                </Col>
              </Row>
            )}
            {activeKeyDeca === 'februar' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://delfi.rs/_img/artikli/2015/11/vejte_snegovi_vv.jpg"
                    alt="Вејте снегови — Морин Џонсон, Џон Грин, Лорен Миракл"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за фебруар — Дечије одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Морин Џонсон, Џон Грин, Лорен Миракл<br/>
                    <strong>Наслов:</strong> "Вејте снегови"<br/><br/>
                     "Вејте снегови" је топла и шармантна књига која говори о младалачкој љубави, случајним сусретима и магији зимских празника.
Кроз три повезане приче, крајње живописни ликови крећу се између главних и споредних улога. На том путу постају свесни својих осећања и признају их себи. Судбине јунака постепено се укрштају и на крају спајају у заједнички ток, обојен празничним расположењем.
Дело пред вама је незаобилазно штиво за све тинејџере, али и за оне који верују да зима уме спојити људе баш онда када делује да је све стало.
                  </p>
                </Col>
              </Row>
            )}        
        {activeKeyDeca === 'januar' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://delfi.rs/_img/artikli/2016/11/dzepne_price_vv.jpg"
                    alt="Џепне приче — Игор Коларов"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за јануар— Дечије одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Игор Коларов<br/>
                    <strong>Наслов:</strong>  "Џепне приче"<br/><br/>
                   Аутор ове интерактивне књиге за најмлађе, Игор Коларов, у свакој причи позива читаоца да активно учествује у стварању приче и на тај начин постане њен саставни део. На шаљив начин писац поставља низ занимљивих питања која подстичу размишљање, машту и истраживачки дух деце.
Књига је богато илустрована, што додатно привлачи пажњу млађих читалаца.
"Џепне приче" су савршен избор за децу која воле да откривају свет кроз игру и смех.
                  </p>
                </Col>
              </Row>
            )}
     
              
          
          </Col>
     
          
          
        </Row>
      </div>

      {/* Научно одељење */}
      <div id="menu2" className="container tab-pane fade">
        <br/>
        <h3 className="container-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>Месечна препорука — Научно одељење</h3>
        <Row>
          <Col xs={12} md={4} lg={4} className="text-center mt-2 mt-md-0">
              <img
                src="https://static.kupindoslike.com/Bluz-tvoje-duse-Anders-Hansen_slika_O_166544681.jpg"
                alt="Блуз твоје душе — Андерс Хансен"
                loading="lazy"
                width="300"
                height="450"
                itemProp="image"
                referrerPolicy="no-referrer"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  marginTop: '2rem'
                }}
              />
          </Col>

          <Col xs={12} md={8} lg={8}>
            <br/>
            <p className='container-text'>
              <strong>Наша препорука</strong><br/>
              <strong>Научно одељење</strong><br/><br/>
              <strong>Аутор:</strong> Андерс Хансен<br/>
              <strong>Наслов:</strong> „Блуз твоје душе"<br/><br/>
              „Блуз твоје душе" је научнопопуларна књига која на занимљив начин разматра једну велику савремену загонетку — зашто многи људи имају проблема с менталним здрављем, упркос све бољим условима живота. Полазећи од чињенице да смо потомци оних који су преживљавали у много тежим околностима, аутор објашњава како наш мозак и даље функционише по старим обрасцима. Књига нуди биолошки увид у наше ментално и физичко стање, с циљем да боље разумемо сопствене реакције и осећања.
              <br/><br/>
              Интересантно и корисно штиво за све који су спремни да мењају поглед на себе и свет.
            </p>
          </Col>
        </Row>

        <Row><br /><hr />
          <Col md={3}>
            <Nav variant="pills" className="flex-column" activeKey={activeKeyNaucno} onSelect={(k) => k && setActiveKeyNaucno(k)}>
              {RECOMMENDATION_ARCHIVE_MONTHS.map(([key, label]) => (
                <Nav.Item key={`n-${key}`}>
                  <Nav.Link eventKey={key} className="container-text">{label}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
           <Col md={9}>
            {activeKeyNaucno === 'april' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://delfi.rs/_img/artikli/2022/04/deca_koja_zele_da_izlece_svoje_roditelje_vv.jpg"
                    alt="Деца која желе да излече своје родитеље — Бруно Клавије"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за април — Научно одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Бруно Клавије<br/>
                    <strong>Наслов:</strong> „Деца која желе да излече своје родитеље"<br/><br/>
                    Бруно Клавије, француски психоаналитичар, у овој књизи на једноставан и разумљив начин приказује колико су деца дубоко повезана са родитељима и како та веза утиче на њихове емоције, понашање и унутрашњи свет.
                    Кроз бројне примере из клиничке праксе, аутор показује како деца често несвесно преузимају улогу спасилаца својих родитеља, настојећи да очувају равнотежу у породици. „Наша деца оболевају покушавајући да нас излече, а пре свега да излече наша породична стабла“, истиче Клавије.
                    Књига је намењена свима који желе свесније да сагледају дечји свет, али и значај наслеђа наших предака.
                  </p>
                </Col>
              </Row>
            )}
          {activeKeyNaucno === 'mart' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://static.kupindoslike.com/Crna-ovca-Nije-ni-tako-lose-biti-los_slika_O_169012899.jpg"
                    alt="Црна овца — Ричард Стивенс"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за март — Научно одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Ричард Стивенс<br/>
                    <strong>Наслов: "Црна овца"</strong><br/><br/> Књига професора Стивенса бави се људским понашањима која обично проглашавамо лошима. Аутор сваку тезу темељи на конкретним и често изненађујућим истраживањима, чинећи научне увиде приступачним, живим и провокативним.
Уместо моралисања, Стивенс нуди баланс и поручује да се у свему лошем нађе и понешто добро. Књига се чита лако, као својеврсна авантура, а истовремено неприметно помера наше устаљене ставове.
Пред вама је једно веома необично путовање кроз психолошку науку.
                  </p>
                </Col>
              </Row>
            )}
            {activeKeyNaucno === 'februar' && (
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="text-center mt-4">
                  <img
                    src="https://delfi.rs/_img/artikli/2021/12/kako_da_zivite_kao_mali_princ_vv.jpg"
                    alt="Како да живите као Мали Принц — Стефан Гарније"
                    loading="lazy"
                    width="300"
                    height="450"
                    itemProp="image"
                    referrerPolicy="no-referrer"
                    className="container-image"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="mt-4">
                  <p className="container-text">
                    <strong>Наша препорука за фебруар — Научно одељење</strong><br/><br/>
                    <strong>Аутор:</strong> Стефан Гарније<br/>
                    <strong>Наслов: "Како да живите као Мали Принц"</strong><br/><br/> У овој инспиративној књизи, Стефан Гарније нас враћа свету Малог Принца и подсећа на његову ванвременску мудрост. Полазећи од особина тог чувеног лика, аутор нас позива да поново откријемо своје унутрашње дете и једноставну радост живљења.
Књига нас учи како да променимо поглед на свет и негујемо снове који нас покрећу.
"Када се полази од нуле, све наде су дозвољене", поручује Гарније, подсећајући да срећа почиње у нама самима.
                  </p>
                </Col>
              </Row>
            )}
          </Col>
           
       
        </Row>
      </div>

      {/* Одељење за одрасле — месечна препорука и архива */}
      <div id="menu3" className="container tab-pane fade show active">
        <br/>
        <h3 className="container-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>Месечна препорука романа</h3>
        <Row>
          <Col xs={12} md={5} lg={5} className="text-center mt-2 mt-md-0">
            <a
              href="https://static.rtv.rs/slike/2025/09/22/nadja-petrovic-meduze-zive-zauvek-geopoetika.jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Отвори слику корице — Медузе живе заувек док их не ухвате, Нађа Петровић"
            >
              <img
                src="https://static.rtv.rs/slike/2025/09/22/nadja-petrovic-meduze-zive-zauvek-geopoetika.jpg"
                alt="Корица књиге „Медузе живе заувек док их не ухвате" 
                loading="lazy"
                width="380"
                height="570"
                itemProp="image"
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  maxWidth: 'min(100%, 420px)',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  marginTop: '1rem'
                }}
              />
            </a>
            <hr/><br/>
            <a
              href="https://www.rtv.rs/sr_ci/vojvodina/novi-sad/nadja-petrovic-meduze-zive-zauvek-dok-ih-ne-uhvate-(audio)_1658495.html"
              target="_blank"
              rel="noopener noreferrer"
              className="container-text d-inline-block mt-3"
              style={{ color: '#3f2c11', textDecoration: 'underline' }}
            >
              Нађа Петровић — прилог РТВ-а (аудио)
            </a>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <p className='container-text'>
              <strong>Наша препорука</strong><br/>
              <strong>Одељење за одрасле</strong><br/><br/>
              <strong>Аутор:</strong> Нађа Петровић<br/>
              <strong>Наслов:</strong> „Медузе живе заувек док их не ухвате"<br/><br/>
              „Медузе живе заувек", роман Нађе Петровић, доноси аутентичан књижевни глас који истражује слојеве између сна и јаве. Почиње као тинејџерска драма одрастања, али убрзо прераста у узбудљиву интимну исповест.
              <br/><br/>
              Испричан у првом лицу, роман пружа суптилан увид у унутрашњи свет младе јунакиње Саре. То је прича о дубокој крхкости, о страху од смрти, али и страху од живота. Атмосфера је истовремено прожета нежном романтиком и сировом стварношћу одрастања.
              <br/><br/>
              Откријте зашто је овај роман право освежење међу делима савремене књижевности.
            </p>
         
          </Col>
        </Row>

            <Row><br/> <hr/>
              <Col md={3}>
                <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={(k) => k && setActiveKey(k)}>
                  {RECOMMENDATION_ARCHIVE_MONTHS.map(([key, label]) => (
                    <Nav.Item key={key}>
                      <Nav.Link eventKey={key} className="container-text">{label}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col md={9}>
                 {activeKey === 'decembar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <a 
                        href="https://delfi.rs/_img/artikli/2021/09/strucnjak_za_ljubomoru_i_druge_price_vv.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Стручњак за љубомору и друге приче - корица књиге"
                        title="Стручњак за љубомору и друге приче - Ју Несбе"
                      >
                        <img 
                          src="https://delfi.rs/_img/artikli/2021/09/strucnjak_za_ljubomoru_i_druge_price_vv.jpg" 
                          alt="Стручњак за љубомору и друге приче - корица књиге Ју Несбе, препорука библиотекара"
                          title="Стручњак за љубомору и друге приче - Ју Несбе"
                          className="container-image"
                          loading="lazy"
                          width="300"
                          height="450"
                          itemProp="image"
                          referrerPolicy="no-referrer"
                          style={{maxWidth: '105%', height: 'auto', display: 'block', margin: '0 auto'}}
                        />
                      </a>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">📖 Пред вама је седам напетих, мрачних и интригантних прича чувеног норвешког мајстора крими приче, Ју Несбеа. У средишту сваке приче одјекује мисао да је „бес од љубоморе, као и заљубљеност, једна врста лудила због којег људи раде ствари које им иначе не би пале на памет." Несбеово наративно ткање открива колико далеко нас љубомора може одвести и колико њене последице могу бити трајне и разорне. Приче се читају у једном даху, али истовремено постављају важна морална и психолошка питања.</p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib/results?q=%D1%98%D1%83%20%D0%BD%D0%B5%D1%81%D0%B1%D0%B5&lib=gbru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Остала дела Ју Несбеа"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела ове ауторке
                      </Button> </Col>
                  </Row>
                )}
                {activeKey === 'januar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <a 
                        href="https://delfi.rs/_img/artikli/2021/09/strucnjak_za_ljubomoru_i_druge_price_vv.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Милева Ајнштајн - теорија туге - корица књиге"
                        title="Милева Ајнштајн - теорија туге - Славенка Дракулић"
                      >
                        <img 
                          src="https://laguna.rs/_img/korice/5830/mileva_anstajn_teorija_tuge-slavenka_drakulic_v.jpg?v=1676990837" 
                          alt="Милева Ајнштајн - теорија туге - корица књиге Славенке Дракулић, препорука библиотекара"
                          title="Милева Ајнштајн - теорија туге - Славенка Дракулић"
                          className="container-image"
                          loading="lazy"
                          width="300"
                          height="450"
                          itemProp="image"
                          referrerPolicy="no-referrer"
                          style={{maxWidth: '105%', height: 'auto', display: 'block', margin: '0 auto'}}
                        />
                      </a>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">
                        <strong>Наша препорука - Одељење за одрасле</strong><br/><br/>
                        <strong>Аутор:</strong> Славенка Дракулић<br/>
                        <strong>Наслов:</strong> „Милева Ајнштајн - теорија туге"<br/><br/>
                        Пред вама је потресан роман који приказује портрет Милеве Марић Ајнштајн у годинама након распада брака са Албертом. Ауторка уверљиво приказује Милевину борбу са болешћу, усамљеношћу и теретом одговорности за двојицу синова. Прича је проткана Милевиним унутрашњим монолозима, који откривају оштрину њеног ума, али и дубину туге и разочарања. Ово је роман који говори о жени чији су потенцијали остали у сенци генија, али чија се снага и тиха патња дуго задржавају у читаоцу.
                      </p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib/results?q=%D0%B4%D1%80%D0%B0%D0%BA%D1%83%D0%BB%D0%B8%D1%9B%2C%20%D1%81%D0%BB%D0%B0%D0%B2%D0%B5%D0%BD%D0%BA%D0%B0&lib=gbru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Остала дела Славенке Дракулић коју поседује наша библиотека"
                        style={{marginTop: '0.5rem'}}
                      >
                        Остала дела овог аутора којe поседује наша библиотека
                      </Button>
                    </Col>
                  </Row>
                )}
                 {activeKey === 'februar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <a 
                        href="https://www.vulkani.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/6495_1200_1200px.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Разум и осећајност - корица књиге"
                        title="Разум и осећајност - Џејн Остин"
                      >
                          <img 
                        src="data:image/jpeg;base64,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" 
                        alt='Lana Bastasic'
                        loading="lazy"
                        width="300"
                        height="450"
                        itemProp="image"
                        referrerPolicy="no-referrer"
                        style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', marginTop:'2.5rem'}}
                      />
                      </a>
                    </Col>
                 <Col xs={12} md={8} lg={8}>
                    <p className='container-text mt-2'>
                      <strong>Наша препорука - Одељење за одрасле</strong><br/><br/>
                      <strong>Аутор:</strong> Лана Басташић<br/>
                      <strong>Наслов:</strong> „Црвени кофер"<br/><br/>
                      Књига "Црвени кофер" писана је у форми дневника и отвара врата ауторкиног богатог и суптилног унутрашњег света. Настала је 2021. године током Ланиног боравка у Цириху и обогаћена је њеним фотографијама.
Кроз личне записе и рефлексије, читалац се сусреће са размишљањима о животу, љубави и смрти, као и о књижевности и уметности уопште. Присутне су теме дома и неприпадања, али и снажна потреба за лутањем и трагањем за смислом. 
Ово је књига којој ћемо се радо враћати након првог читања.

                    </p>
                       <Button
                      variant="secondary"
                      href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib/results?q=%D0%B1%D0%B0%D1%81%D1%82%D0%B0%D1%88%D0%B8%D1%9B%2C%20%D0%BB%D0%B0%D0%BD%D0%B0&lib=gbru"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Остала дела Лане Басташић које поседује наша библиотека"
                      style={{marginTop: '0.5rem'}}
                    >
                      Остала дела овог аутора којe поседује наша библиотека
                    </Button>
                  </Col>
                  </Row>
                  )}

                {activeKey === 'mart' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center mt-4">
                      <img
                        src="https://laguna.rs/_img/korice/5249/sova-samuel_bjerk_v.jpg?v=1632469089"
                        alt="Сова — Самуел Бјерк, корица књиге"
                        loading="lazy"
                        width="300"
                        height="450"
                        className="container-image"
                        referrerPolicy="no-referrer"
                        style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                      />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">
                        <strong>Наша препорука за март — Одељење за одрасле</strong>
                        <br /><br />
                        <strong>Аутор:</strong> Самуел Бјерк<br />
                        <strong>Наслов:</strong> „Сова"
                        <br /><br />
                        Мрачан и изузетно напет норвешки психолошки трилер.
                        „Сова" је наставак светског бестселера „Анђео у шуми" — нова прича, али са добро познатим ликовима: Холгером Мунком и Мијом Кригер. Овога пута, као уиграни истражитељски тандем, суочавају се са новим, узнемирујућим случајем.
                        Софистицирана радња, снажна психологија ликова и атмосфера која држи пажњу до последње странице чине овај роман правим примером врхунског скандинавског ноара.
                        Књига која се не испушта из руку.
                      </p>
                    
                    </Col>
                  </Row>
                )}

                {activeKey === 'april' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center mt-4">
                      <a
                        href="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1351685249i/9458300.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Отвори слику корице — Дневник Марте Коен"
                      >
                        <img
                          src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1351685249i/9458300.jpg"
                          alt="Дневник Марте Коен — Светислав Басара, корица књиге"
                          loading="lazy"
                          width="300"
                          height="450"
                          className="container-image"
                          referrerPolicy="no-referrer"
                          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                        />
                      </a>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">
                        <strong>Наша препорука за април — Одељење за одрасле</strong>
                        <br /><br />
                        <strong>Аутор:</strong> Светислав Басара<br />
                        <strong>Наслов:</strong> „Дневник Марте Коен"
                        <br /><br />
                        Роман „Дневник Марте Коен" Светислав Басара доноси причу о Марти Коен, сложеној и контрадикторној личности која је истовремено приказана као сурова предводница логора за децу на Голом отоку и као дубоко трагична жена која није успела да пронађе испуњење у животу. Њен лик је обележен унутрашњим расцепом и подвојеношћу, што кулминира на самом крају, када се, иако чврсто везана за комунистичку идеологију, обраћа Богу и показује универзалну потребу за вишим смислом.
                        <br /><br />
                        Кроз истрагу новинара који покушава да расветли околности њене смрти, Басара гради сложену мрежу питања о идентитету, истини и одговорности. Њена смрт, која се показује као убиство, на крају добија извесну правду када се открива да је убица један од бивше деце из логора.
                        <br /><br />
                        Роман је испуњен апсурдом, филозофским и историјским слојевима, у којем се појављују разни ликови – од партијских функционера до мистичара – што додатно наглашава распад идеологија и преиспитивање „великих истина". Басара овим делом показује да човек, без обзира на идеолошка уверења, увек остаје у потрази за смислом и вишим бићем.
                      </p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru&q=basara+svetislav"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Остала дела Светислава Басара у фонду библиотеке"
                        style={{ marginTop: '0.5rem' }}
                      >
                        Остала дела овог аутора
                      </Button>
                    </Col>
                  </Row>
                )}

                {activeKey === 'novembar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <a 
                        href="https://www.vulkani.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/6495_1200_1200px.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Разум и осећајност - корица књиге"
                        title="Разум и осећајност - Џејн Остин"
                      >
                        <img 
                          src="https://www.vulkani.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/6495_1200_1200px.jpg" 
                          alt="Разум и осећајност - корица књиге Џејн Остин, препорука библиотекара"
                          title="Разум и осећајност - Џејн Остин"
                          className="container-image"
                          loading="lazy"
                          width="300"
                          height="450"
                          itemProp="image"
                          referrerPolicy="no-referrer"
                          style={{maxWidth: '105%', height: 'auto', display: 'block', margin: '0 auto'}}
                        />
                      </a>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">📖 Препорука за новембар: „Разум и осећајност" – роман који прати емоционални живот две сестре. Код једне преовлађује осјећајност, код друге разум. Обе су драге и миле, а кроз њихове приче добијамо увид у једно време и његове обичаје. Топла и духовита приповест савршена је за хладне новембарске вечери, уз шољу топлог напитка и миран кутак за читање.</p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib/results?q=%D0%BE%D1%81%D1%82%D0%B8%D0%BD%2C%20%D1%9F*&lib=gbru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Џејн Остин"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела ове ауторке
                      </Button> </Col>
                   
                  </Row>
                )}
                
              </Col>

                  
            </Row>
            <br/>
      </div>

    </div>
  </AnimatedCard>

            {/* <h2 className='container-title mb-2 mt-4'>Жанровске препоруке</h2>
            <hr />

            <Nav
              variant="pills"
              activeKey={genreKey}
              onSelect={setGenreKey}
              className="mb-4 genre-nav flex-wrap"
            >
              <Nav.Item>
                <Nav.Link eventKey="roman" className="genre-nav-link">Роман</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="triler" className="genre-nav-link">Трилер</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ljubavni" className="genre-nav-link">Љубавни</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="istorijski" className="genre-nav-link">Историјски</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="drama" className="genre-nav-link">Драме</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="horor" className="genre-nav-link">Хорори</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="naucna_fantastika" className="genre-nav-link">Научна фантастика</Nav.Link>
              </Nav.Item>
            </Nav>

            <Container className="genre-recommendations-container">
              <Row className="g-3">
                {genreRecommendations[genreKey]?.map((item, idx) => (
                  <Col key={`${genreKey}-${idx}`} xs={12} md={4}>
                    <AnimatedCard className="genre-card">
                      <p className="genre-card-title">{item.naslov}</p>
                      <p className="genre-card-desc">{item.opis}</p>
                      <Button
                        variant="secondary"
                        href={cobissSearchUrl(item.keyword)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="genre-card-button"
                        aria-label={`Прегледајте ${item.naslov} у COBISS+`}
                      >
                        Прегледај у COBISS+
                      </Button>
                    </AnimatedCard>
                  </Col>
                ))}
              </Row>
            </Container>
          */}
        </Container>
        </>
    );
};

export default Recommendations;



