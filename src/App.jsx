import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/Services';
import Competition from './components/AboutAs/Competition';
import Recommendations from './components/Books/Recommendations';
import DigitalLibrary from './components/Books/DigitalLibrary';
import BooksSearche from './components/Books/BooksSearche';
import Events from './components/Events';
import OurPublic from './components/Books/OurPublic';
import Kid from './components/Department/Kid';
import Adult from './components/Department/Adult';
import Scientific from './components/Department/Scientific';
import Homeland from './components/Department/Homeland';
import Project from './components/AboutAs/Project';
import Legati from './components/Department/Legati';
import MisionAndVision from './components/AboutAs/MisionAndVision';
import { FaEnvelope } from 'react-icons/fa';
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import AnimatedPage from './components/Department/AnimatedPage';
import ImageModal from './components/ImageModal';
import { AnimatePresence } from 'framer-motion';
import NotFound from './components/NotFound';
// import cobbis from './images/cobbis.webp';
// import logoDigitalna from './images/logoDigitalna.webp'

const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script';
const LANGUAGE_STORAGE_KEY = 'siteLanguage';
const GOOGLE_TRANSLATE_COOKIE_NAME = 'googtrans';

function getInitialLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'sr';
  } catch {
    return 'sr';
  }
}

function InnerApp() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [language] = useState(getInitialLanguage());
  
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });

  // Function to handle image click (removed as unused)

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage({ src: '', alt: '', title: '' });
  };

  const setTranslateCookie = (targetLanguage) => {
    const cookieValue = `/sr/${targetLanguage}`;
    try {
      document.cookie = `${GOOGLE_TRANSLATE_COOKIE_NAME}=${cookieValue};path=/;max-age=31536000`;
      if (window.location.hostname && window.location.hostname !== 'localhost') {
        document.cookie = `${GOOGLE_TRANSLATE_COOKIE_NAME}=${cookieValue};path=/;domain=.${window.location.hostname};max-age=31536000`;
      }
    } catch {
      // ignore cookie failures (privacy settings, blocked cookies, etc.)
    }
  };

  const handleLanguageClick = (targetLanguage) => {
    if (targetLanguage === language) {
      return;
    }
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, targetLanguage);
    } catch {
      // ignore storage failures (privacy settings, blocked storage, etc.)
    }
    setTranslateCookie(targetLanguage);
    window.location.reload();
  };

  useEffect(() => {
    const initializeTranslator = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'sr',
            includedLanguages: 'sr,en',
            autoDisplay: false
          },
          'google_translate_element'
        );
      }
    };

    window.googleTranslateElementInit = initializeTranslator;

    if (!document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      initializeTranslator();
    }

    return () => {
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // ignore
    }
    setTranslateCookie(language);

    const applyLanguage = () => {
      const select = document.querySelector('.goog-te-combo');
      if (!select) {
        return false;
      }

      if (select.value !== language) {
        select.value = language;
        select.dispatchEvent(new Event('change'));
        select.dispatchEvent(new Event('input'));
      }
      return true;
    };

    if (applyLanguage()) {
      return undefined;
    }

    const interval = setInterval(() => {
      if (applyLanguage()) {
        clearInterval(interval);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <>
{/* 
      <div className="top-bar">
        <div className="bar-content">
        <span>Са задовољством обавештавамо наше кориснике да је библиотека обогатила своју понуду аудио-књигама. Више информација можете добити у наставку, на почетној страници сајта.</span>  
          <span>&nbsp;| Радно време библиотеке од 08:00 до 20:00</span>
          <span> &nbsp;| <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer" aria-label="YouTube kanal biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-youtube"></i> YouTube</a> |
          <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer" aria-label="Instagram biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-instagram"></i> Instagram</a> |
          <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer" aria-label="Facebook biblioteke" style={{ fontSize: '1em', color: 'inherit' }}><i className="fab fa-facebook"></i> Facebook</a></span>  
        </div>
        <div id="google_translate_element" />
      </div>  */}
           
          
      {/* <div className="top-bar">
        <div className="bar-content">
        <span>Са задовољством обавештавамо наше кориснике да је библиотека обогатила своју понуду аудио-књигама. Више информација можете добити у наставку, на почетној страници сајта.</span>  
          <span>&nbsp;| Радно време библиотеке од 08:00 до 20:00</span>
          <span> &nbsp;| <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer" aria-label="YouTube kanal biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-youtube"></i> YouTube</a> |
          <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer" aria-label="Instagram biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-instagram"></i> Instagram</a> |
          <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer" aria-label="Facebook biblioteke" style={{ fontSize: '1em', color: 'inherit' }}><i className="fab fa-facebook"></i> Facebook</a></span>  
        </div>
        <div id="google_translate_element" />
      </div>  
   */}

      <header>
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="sticky-navbar shadow">
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              <Row>
                <Col md={4}>
                  <img 
                    src="/logo.webp"
                    alt="Грб Градске библиотеке Рума" 
                    className='logo clickable-image' 
                    style={{ marginLeft: '4.5rem' }} 
                    fetchpriority='high'
                    title="Кликните за већу слику"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col md={4} className='mt-3'>
                  <h1 className='container-text fw-bold' style={{ marginLeft: '1.5rem' }}>
                    Градска библиотека „Атанасије Стојковић“ Рума
                  </h1>
                </Col>
              </Row>
            </Navbar.Brand>
            {/* Hamburger meni ili X dugme */}
            {!expanded && (
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            )}
            {expanded && (
              <button
                type="button"
                aria-label="Zatvori meni"
                onClick={() => setExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '2rem',
                  color: '#343a40',
                  zIndex: 1051,
                  display: 'block',
                }}
                className="d-lg-none"
              >
                &times;
              </button>
            )}
            
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="w-100 d-flex flex-column align-items-lg-end">
                <Nav className="ms-auto fs-5 mt-3 align-items-lg-center">
                  <NavDropdown title="О БИБЛИОТЕЦИ" id="about-dropdown">
                    <NavDropdown.Item as={Link} to="/istorijat-biblioteke" onClick={() => setExpanded(false)}>Историјат библиотеке</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/zaposleni-biblioteke" onClick={() => setExpanded(false)}>Запослени</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/vizija-misija-biblioteke" onClick={() => setExpanded(false)}>Визија и мисија</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projekti-biblioteke" onClick={() => setExpanded(false)}>Пројекат</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/konkurs-biblioteke" onClick={() => setExpanded(false)}>Конкурс</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ФОНД" id="fund-dropdown">
                   <NavDropdown.Item as={Link} to="/preporuke-bibliotekara" onClick={()=>setExpanded(false)}>Препорука библиотекара</NavDropdown.Item> 
                    <NavDropdown.Item as={Link} to="/nasa-izdanja" onClick={() => setExpanded(false)}>Наша издања</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/digitalna-biblioteka" onClick={() => setExpanded(false)}>Дигитална библиотека</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/pretrazivanje-fonda" onClick={() => setExpanded(false)}>Претраживање фонда</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/legati-biblioteke" onClick={() => setExpanded(false)}>Легати</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ОДЕЉЕЊА" id="sections-dropdown">
                    <NavDropdown.Item as={Link} to="/odeljenje-za-decu" onClick={() => setExpanded(false)}>Одељење за децу</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/odeljenje-za-odrasle" onClick={() => setExpanded(false)}>Одељење за одрасле</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/odeljenje-naucne-i-strucne-literature" onClick={() => setExpanded(false)}>Одељење научне и стручне литературе</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/zavicajna-zbirka" onClick={() => setExpanded(false)} >Завичајна збирка</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={Link} to="/usluge-biblioteka-ruma" onClick={() => setExpanded(false)}>УСЛУГЕ</Nav.Link>
                  <Nav.Link as={Link} to="/manifestacije-biblioteka-ruma" onClick={() => setExpanded(false)}>МАНИФЕСТАЦИЈЕ</Nav.Link>
                  <Nav.Link as={Link} to="/kontakt-biblioteka-ruma" onClick={() => setExpanded(false)}>КОНТАКТ</Nav.Link>

                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="utility-floating notranslate" translate="no">
        <div className="language-floating" translate="no">
          <button
            type="button"
            className={language === 'sr' ? 'active' : ''}
            onClick={() => handleLanguageClick('sr')}
            translate="no"
            aria-label="Prikazi sajt na srpskom"
          >
            SR
          </button>
          <span translate="no">/</span>
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => handleLanguageClick('en')}
            translate="no"
            aria-label="Show website in English"
          >
            EN
          </button>
        </div>
        <a
          className="utility-link"
          href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="COBISS pretraga fonda"
        >
          COBISS
        </a>
        <a
          className="utility-link"
          href="https://www.digitalna.bibliotekaruma.rs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Digitalna biblioteka"
        >
          DIGITALNA
        </a>
      </div>

      <main role="main" id="main-content">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AnimatedPage><Home /></AnimatedPage>} />
          {/* Latin routes */}
          <Route path='/kontakt-biblioteka-ruma' element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path='/istorijat-biblioteke' element={<AnimatedPage><History /></AnimatedPage>} />
          <Route path='/zaposleni-biblioteke' element={<AnimatedPage><Employees /></AnimatedPage>} />
          <Route path='/usluge-biblioteka-ruma' element={<AnimatedPage><Services /></AnimatedPage>} />
          <Route path='/manifestacije-biblioteka-ruma' element={<AnimatedPage><Events /></AnimatedPage>} />
          <Route path='/konkurs-biblioteke' element={<AnimatedPage><Competition /></AnimatedPage>} />
          <Route path='/preporuke-bibliotekara' element={<AnimatedPage><Recommendations /></AnimatedPage>} />
          <Route path='/nasa-izdanja' element={<AnimatedPage><OurPublic /></AnimatedPage>} />
          <Route path='/digitalna-biblioteka' element={<AnimatedPage><DigitalLibrary /></AnimatedPage>} />
          <Route path='/pretrazivanje-fonda' element={<AnimatedPage><BooksSearche /></AnimatedPage>} />
          <Route path='/odeljenje-za-decu' element={<AnimatedPage><Kid /></AnimatedPage>} />
          <Route path='/odeljenje-za-odrasle' element={<AnimatedPage><Adult /></AnimatedPage>} />
          <Route path='/odeljenje-naucne-i-strucne-literature' element={<AnimatedPage><Scientific /></AnimatedPage>} />
          <Route path='/zavicajna-zbirka' element={<AnimatedPage><Homeland /></AnimatedPage>} />
          <Route path='/projekti-biblioteke' element={<AnimatedPage><Project /></AnimatedPage>} />
          <Route path='/legati-biblioteke' element={<AnimatedPage><Legati /></AnimatedPage>} />
          <Route path='/vizija-misija-biblioteke' element={<AnimatedPage><MisionAndVision /></AnimatedPage>} />

          {/* Redirect old Cyrillic slugs to Latin equivalents */}
          <Route path='/контакт-библиотека-рума' element={<Navigate to='/kontakt-biblioteka-ruma' replace />} />
          <Route path='/историјат-библиотеке' element={<Navigate to='/istorijat-biblioteke' replace />} />
          <Route path='/запослени-библиотеке' element={<Navigate to='/zaposleni-biblioteke' replace />} />
          <Route path='/услуге-библиотека-рума' element={<Navigate to='/usluge-biblioteka-ruma' replace />} />
          <Route path='/манифестације-библиотека-рума' element={<Navigate to='/manifestacije-biblioteka-ruma' replace />} />
          <Route path='/конкурс-библиотеке' element={<Navigate to='/konkurs-biblioteke' replace />} />
          <Route path='/препоруке-библиотекара' element={<Navigate to='/preporuke-bibliotekara' replace />} />
          <Route path='/наша-издања' element={<Navigate to='/nasa-izdanja' replace />} />
          <Route path='/дигитална-библиотека' element={<Navigate to='/digitalna-biblioteka' replace />} />
          <Route path='/претраживање-фонда' element={<Navigate to='/pretrazivanje-fonda' replace />} />
          <Route path='/одељење-за-децу' element={<Navigate to='/odeljenje-za-decu' replace />} />
          <Route path='/одељење-за-одрасле' element={<Navigate to='/odeljenje-za-odrasle' replace />} />
          <Route path='/одељење-научне-и-стручне-литературе' element={<Navigate to='/odeljenje-naucne-i-strucne-literature' replace />} />
          <Route path='/завичајна-збирка' element={<Navigate to='/zavicajna-zbirka' replace />} />
          <Route path='/пројекти-библиотеке' element={<Navigate to='/projekti-biblioteke' replace />} />
          <Route path='/легати-библиотеке' element={<Navigate to='/legati-biblioteke' replace />} />
          <Route path='/визија-мисија-библиотеке' element={<Navigate to='/vizija-misija-biblioteke' replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      </main>

      <footer className="library-footer">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <span>АДРЕСА: ГЛАВНА 114, РУМА</span>
                <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
                <span> | <FaEnvelope style={{ fontSize: '20px', color: '#4b301f' }} /> gbasruma@gmail.com</span>
                <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">YouTube</a></span>
                <span> | <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">Facebook</a></span>
                <span> | <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">Instagram</a></span>
              </div>
            </Col>
          </Row>
          <br /><hr />
          <Row>
            <Col md={12}>
              <p className='container-text'>
                <br />&copy; 2025 Библиотека Рума. Задржава сва права.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <InnerApp />
      </Router>
    </HelmetProvider>
  );
}

export default App;
