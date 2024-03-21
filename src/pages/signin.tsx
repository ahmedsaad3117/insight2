import React, { useEffect } from "react";
import { GridLoader } from "react-spinners";
import { Container, Row } from "react-bootstrap";

function Signin() {

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    
    if (query.get('error') === 'OAuthCallback') {
      // window.location.href = window.location.origin;
    }
  }, [])
  
  return (
    <Row style={{ alignItems: 'center', height: '100%' }}>
      <Container style={{ width: 57, boxSizing: 'content-box' }}>
        <GridLoader color="#3A3985" size={30} />
      </Container>
    </Row>
  );
}

export default Signin;