import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function LoginCard({ setCurrentIndex }: Props) {

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    remember_me: Yup.boolean()
  });

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      remember_me: false,
    }
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
    setCurrentIndex(1);
  }
  
  return (
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
                    checked={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Col>

            <Col style={{ maxWidth: 'max-content' }}>
              <Button variant="link" className="text-primary" onClick={() => setCurrentIndex(2)}>
                Forget Password
              </Button>
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
  )
}
