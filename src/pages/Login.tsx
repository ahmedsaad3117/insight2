import Link from "next/link"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
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

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    remember_me: Yup.boolean()
  });

  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      remember_me: false,
    }
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
  }
  
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
              <Form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { value, onChange, onBlur }, fieldState }) => (
                      <>
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
                      />
                      <Form.Label htmlFor="email">Username or Email address</Form.Label>
                      <div className="invalid-feedback">{ fieldState.error?.message }</div>
                      </>
                    )}
                  />
                </div>
                <div className="form-floating mb-3">
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { value, onChange, onBlur }, fieldState }) => (
                      <>
                      <Form.Control
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
                      />
                      <Form.Label htmlFor="password">Password</Form.Label>
                      <div className="invalid-feedback">{ fieldState.error?.message }</div>
                      </>
                    )}
                  />
                </div>
                <Row>
                  <Col>
                  <Controller
                    name="remember_me"
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Form.Check
                        id="agree"
                        type="checkbox"
                        className="mb-3"
                        label="Remember me"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
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
