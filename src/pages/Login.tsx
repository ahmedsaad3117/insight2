import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Image from "@/components/CustomImage"
import LoginCard from "@/components/Login/LoginCard"
import OTP from "@/components/Login/OTP"
import ForgotPasswordCard from "@/components/Login/ForgotPasswordCard"
import ResetPassword from "@/components/Login/ResetPasswordCard"
import SuccessfulPasswordReset from "@/components/Login/SuccessfulPasswordResetCard"

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
  const urlParams = new URLSearchParams(window.location.search);

  const [currentIndex, setCurrentIndex] = useState(
    urlParams.get('reset_password') ? 3 : 0
  );

  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="px-lg-4">
          { currentIndex === 0 ?
            <LoginCard setCurrentIndex={setCurrentIndex} /> :
            currentIndex === 1 ?
            <OTP setCurrentIndex={setCurrentIndex} /> :
            currentIndex === 2 ?
            <ForgotPasswordCard setCurrentIndex={setCurrentIndex} /> :
            currentIndex === 3 ?
            <ResetPassword setCurrentIndex={setCurrentIndex} /> :
            currentIndex === 4 ?
            <SuccessfulPasswordReset setCurrentIndex={setCurrentIndex} /> :
            <></>
          }
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
