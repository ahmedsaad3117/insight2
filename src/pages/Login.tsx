import Link from "next/link"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import Image from "../components/CustomImage"

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
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="px-lg-4">
          <Card>
            <Card.Header className="px-lg-5 py-4">
              <div className="card-heading text-primary fw-700 fs-15-45">sign in</div>
            </Card.Header>
            <Card.Body className="p-lg-5">
              <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
              <p className="text-muted text-sm mb-5">
                Welcome to Reachware, or a way to advance through which you can connect easily
              </p>
              <Form id="loginForm" action="/">
                <div className="form-floating mb-3">
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <Form.Label htmlFor="email">Username or Email address</Form.Label>
                </div>
                <div className="form-floating mb-3">
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Label htmlFor="password">Password</Form.Label>
                </div>
                <Row>
                  <Col>
                    <Form.Check
                      id="agree"
                      type="checkbox"
                      className="mb-3"
                      label="Remember me"
                    />
                  </Col>
                  <Col style={{ maxWidth: 'max-content' }}>
                    <Link href="/forget-password" className="text-primary">
                      Forget Password
                    </Link>
                  </Col>
                </Row>


                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="px-lg-5 py-lg-4">
              <div className="text-sm text-muted">
                Don't have an account?{" "}
                <Link href="/register">
                  Register
                </Link>
                .
              </div>
            </Card.Footer>
          </Card>
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
