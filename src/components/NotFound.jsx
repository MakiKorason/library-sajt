import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
const NotFound = () => (
  <>
     <Helmet>
      <title>404 - Страница није пронађена – Библиотека Рума</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  <Container className="container-library text-center mt-5 mb-5">
    <h1 className="container-title" style={{ fontSize: '4rem' }}>404</h1>
    <h2 className="mb-4">Страница није пронађена</h2>
    <p className="container-text mb-4">
      Извините, страница коју тражите не постоји или је премештена.<br/>
      Можда желите да посетите неку од следећих страница:
    </p>
    <div className="mb-4">
      <Button as={Link} to="/" variant="secondary" className="m-2" aria-label="Вратите се на почетну страницу">Почетна</Button>
   
    </div>

  </Container>
  </>
);

export default NotFound; 