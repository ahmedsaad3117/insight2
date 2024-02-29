import { Dispatch, SetStateAction } from "react"
import { Button, Card, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setCurrentScreen: Dispatch<SetStateAction<number>>;
}

export default function ForgotPasswordForm({ setCurrentIndex, setCurrentScreen }: Props) {

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
    setCurrentScreen(1);
  }
  
  return (
    <Card.Body className="p-lg-5" style={{ paddingTop: '80px !important' }}>
      <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
      <p className="text-muted text-sm mb-5" style={{ fontWeight: 500 }}>
        Please enter your email address and
        <br />
        we’ll send you the link to reset password
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

        <Button variant="primary" size="lg" type="submit" className="my-2">
          Submit
        </Button>
        
        <Row>
          <Button variant="link" style={{ fontWeight: 500, fontSize: 14 }} onClick={() => setCurrentIndex(0)}>
            Back to login
          </Button>
        </Row>
      </Form>
    </Card.Body>
  )
}
