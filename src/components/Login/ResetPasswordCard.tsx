import { Dispatch, SetStateAction, useState } from "react"
import { Button, Card, Form, Stack } from "react-bootstrap"
import * as Yup from 'yup'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const length_regex = /^.{8,}$/;
const uppercase_regex = /[A-Z]/;
const lowercase_regex = /[a-z]/;
const number_regex = /\d/;
const symbol_regex = /[!@#$%^&*(),.?":{}|<>]/;

const bullets = [
  {
    text: "8+ characters",
    regex: length_regex,
  },
  {
    text: "One uppercase characters",
    regex: uppercase_regex,
  },
  {
    text: "One lowercase characters",
    regex: lowercase_regex,
  },
  {
    text: "One number",
    regex: number_regex,
  },
  {
    text: "One symbols",
    regex: symbol_regex,
  },
]

export default function ResetPassword({ setCurrentIndex }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object().shape({
    password: Yup.string().required('Password is required')
      .matches(length_regex, 'Password must be at least 8 characters')
      .matches(uppercase_regex, 'Password must contain at least one uppercase letter')
      .matches(lowercase_regex, 'Password must contain at least one lowercase letter')
      .matches(number_regex, 'Password must contain at least one number')
      .matches(symbol_regex, 'Password must contain at least one symbol'),
    confirm_password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required').when('password', (password) => {
      return Yup.string().required().equals(password, 'Confirm password must match the password');
    }),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirm_password: '',
    }
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
    setCurrentIndex(4);
  }
  
  return (
    <Card>
      <Card.Header className="px-lg-5 py-4">
        <div className="card-heading text-primary fw-700 fs-15-45">Reset your password</div>
      </Card.Header>
      <Card.Body className="p-lg-5" style={{ paddingTop: '30px !important' }}>
        <p className="text-muted text-sm mb-2" style={{ fontWeight: 500, lineHeight: '32px' }}>
          Set the new password for your account so you can login 
        </p>
        <Form id="loginForm" onSubmit={handleSubmit(onSubmit)}>

          <div className="form-floating mb-3">
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange, onBlur }, fieldState }) => (
                <>
                <Form.Control
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
                />
                <Form.Label htmlFor="password">Enter your password</Form.Label>
                <Stack gap={1} style={{ paddingTop: 12 }}>
                  { bullets.map((bullet, index) => (
                    <div key={index} className={`password-bullet-container ${(fieldState.error || (!fieldState.invalid && fieldState.isTouched)) ? (bullet.regex.test(value) ? "success" : "error") : ""}`} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="circle-bullet"></div>
                      <p className="password-bullet">{bullet.text}</p>
                    </div>
                  ))}
                </Stack>
                </>
              )}
            />
          </div>

          <div className="form-floating mb-3">
            <Controller
              name="confirm_password"
              control={control}
              render={({ field: { value, onChange, onBlur }, fieldState }) => (
                <>
                <Form.Control
                  id="confirm_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
                />
                <Form.Label htmlFor="confirm_password">Confirm your new password</Form.Label>
                <div className="invalid-feedback">{ fieldState.error?.message }</div>
                </>
              )}
            />
          </div>

          <Form.Check
            id="show_password"
            type="checkbox"
            className="mb-4"
            label="Show password"
            checked={showPassword}
            onChange={e => setShowPassword(e.target.checked)}
          />

          <Button variant="primary" size="lg" type="submit">
            Reset password
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
