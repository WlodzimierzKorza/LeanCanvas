import React from 'react';
import { Col, Row, Container } from 'components/Grid/Grid';
import LeanCanvasBox from 'components/LeanCanvasBox/LeanCanvasBox';

const LeanCanvasView = () => {
  return (
    <Container>
      <Row height={70}>
        <Col>
          <LeanCanvasBox name="Problem" id={1} />
        </Col>
        <Col>
          <LeanCanvasBox name="Solution" id={2} />
          <LeanCanvasBox name="Key Metrics" id={3} />
        </Col>
        <Col>
          <LeanCanvasBox name="Unique Value Proposition" id={4} />
        </Col>
        <Col>
          <LeanCanvasBox name="Unfair Advantage" id={5} />

          <LeanCanvasBox name="Channels" id={6} />
        </Col>
        <Col>
          <LeanCanvasBox name="Customer Segments" id={7} />
        </Col>
      </Row>
      <Row height={30}>
        <LeanCanvasBox name="Cost Structure" id={8} />
        <LeanCanvasBox name="Revenue Streams" id={9} />
      </Row>
    </Container>
  );
};

export default LeanCanvasView;
