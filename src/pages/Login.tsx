import { Col, Container, Row } from "react-bootstrap"
import Image from "../components/CustomImage"
import LoginForm from "@/components/LoginForm"
import OTP from "@/components/OTP"
import { useState } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Login",
      pageHolderClass: "page-holder align-items-center py-4 bg-gray-100 vh-100",
      hideHeader: true,
      hideFooter: true,
      hideSidebar: true,
    },
  }
}
export default function Login() {
  const [activeComponent, setActiveComponent] = useState('login');

  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="px-lg-4 swipeable-form-container" style={{ flex: 'auto', width: '100%' }}>
          <div className={`form-container ${activeComponent === 'login' ? 'slide-in' : 'slide-out'}`}>
            <LoginForm onSuccess={() => setActiveComponent('otp')} />
          </div>
          <div className={`form-container ${activeComponent === 'otp' ? 'slide-in' : 'slide-out'}`}>
            <OTP onSuccess={() => setActiveComponent('login')} />
          </div>
        </Col>
        <Col
          lg={6}
          xl={5}
          className="ms-xl-auto px-lg-4 text-center text-primary"
        >
          <div className="mb-4">
            <div style={{ transform: "rotate(10deg)" }}>
              <Image
                src="/img/login.png"
                alt="..."
                width={475}
                height={356}
                className="img-fluid"
              />
            </div>
          </div>
          <h1 className="mb-4">
            Start saving <br className="d-none d-lg-inline" />
            your time &amp; money
          </h1>
          <p className="lead text-muted">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed in
          </p>
        </Col>
      </Row>
    </Container>
  )
}
