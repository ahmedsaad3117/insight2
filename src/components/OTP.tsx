import { useEffect, useRef, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import * as Yup from 'yup'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import OtpInput from 'react-otp-input';

interface Props {
  onSuccess: () => void;
}

export default function OTP({ onSuccess }: Props) {
  const [countDown, setCountDown] = useState(10);

  const intervalRef = useRef<any>();

  const schema = Yup.object().shape({
    otp: Yup.string().required('OTP is required').length(4, 'Invalid OTP'),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      otp: '',
    }
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
    onSuccess();
  }

  useEffect(() => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      setCountDown(prev => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev - 1
      });
    }, 1000)
  }, [])
  
  return (
    <Card style={{ width: 591, height: 589 }}>
      <Card.Header className="px-lg-5 py-4">
        <div className="card-heading text-primary fw-700 fs-15-45">otp</div>
      </Card.Header>
      <Card.Body className="p-lg-5" style={{ paddingTop: '80px !important' }}>
        <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
        <p className="text-muted text-sm mb-5" style={{ fontWeight: 500 }}>
          Enter the OTP which we sent to your
          <br />
          Number <span className="text-primary">+92141445485154</span>
        </p>
        <Form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="otp"
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <>
              <OtpInput
                value={value}
                onChange={onChange}
                numInputs={4}
                containerStyle={'gap-4 mx-6'}
                inputStyle={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#F4F4F6',
                  border: '1px solid #B6B6CE',
                  borderRadius: 4,
                }}
                renderInput={(props) => <input {...props} />}
              />
              <div className="invalid-feedback mx-6" style={{ display: 'block' }}>{ fieldState.error?.message }</div>
              </>
            )}
          />

          <div className="text-sm text-muted" style={{ marginTop: 30, marginBottom: 30 }}>
            <span className="text-primary">
              Not received your code?
            </span>
            <Button variant="link" disabled={countDown != 0}>
              Resend Code { countDown != 0 && `(${countDown})`}
            </Button>
          </div>
          
          <Button variant="primary" size="lg" type="submit">
            Verify Now
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
