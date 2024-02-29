import { Dispatch, SetStateAction } from "react"
import { Button, Card, Row } from "react-bootstrap"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setCurrentScreen: Dispatch<SetStateAction<number>>;
}

export default function CheckMail({ setCurrentIndex, setCurrentScreen }: Props) {

  const backToLogin = () => {
    setCurrentIndex(0);
    setCurrentScreen(0);
  }
  
  return (
    <Card.Body className="p-lg-5" style={{ paddingTop: '80px !important' }}>
      <h3 className="mb-4">Check your email</h3>
      <p className="text-muted text-sm mb-5" style={{ fontWeight: 500, lineHeight: '32px' }}>
        We’ve sent an email to <span className="text-primary">hamza@gmail.com</span>
        <br />
        if this email is connected to a reachware account,
        <br />
        you’ll be able to reset your password
      </p>
      <Row className="my-2 gap-6" style={{ gap: 40, justifyContent: 'center' }}>
        <Button variant="outline-primary" size="lg" style={{ width: 'auto' }}>
          Resend email
        </Button>

        <Button variant="primary" size="lg" onClick={backToLogin} style={{ width: 'auto' }}>
          Back to login
        </Button>
      </Row>
    </Card.Body>
  )
}
