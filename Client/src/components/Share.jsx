import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Share() {
  return (
    <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: '50px'}}>
    <div className="contact">
    <Row style={{marginBottom: '10px'}}>
    <Row><Button variant="success"> <a href="https://www.youtube.com" style={{color: '#FFF'}}>Upload to YouTube </a></Button></Row>
    </Row>
    <Row style={{marginTop: '20px'}}>
    <Row><Button variant="success"> <a href="https://soundcloud.com" style={{color: '#FFF'}}>Upload to SoundCloud </a></Button></Row>
    </Row>
    </div>
    </Container>
  );
}

export default Share;