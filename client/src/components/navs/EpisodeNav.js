import React, { Fragment } from 'react';
import Slide from '../player/Slide';
import { Row, Container, Col } from 'react-bootstrap';
import './episodeStyle.css';

const EpisodeNav = () => {
  return (
    <Fragment>
      <Container fluid className='mx-4 my-5 align-items-center'>
        <Row className='slideshow-container'>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
          <Col xs={3} md={2} className='p-2'>
            <Slide />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default EpisodeNav;
