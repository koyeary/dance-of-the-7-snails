import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import './slide.css';

const Slide = () => {
  return (
    <Card className='slide'>
      <Image className='image-fluid' src='/assets/title card.png' />
    </Card>
  );
};

export default Slide;
