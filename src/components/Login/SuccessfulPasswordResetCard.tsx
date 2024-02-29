import { Dispatch, SetStateAction } from "react"
import { Button, Card } from "react-bootstrap"
import Image from "@/components/CustomImage"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function SuccessfulPasswordReset({ setCurrentIndex }: Props) {
  
  return (
    <Card style={{ width: 591, height: 589 }}>
      <Card.Header className="px-lg-5 py-4">
        <div className="card-heading text-primary fw-700 fs-15-45">Successful password reset!</div>
      </Card.Header>
      <Card.Body className="p-lg-5" style={{ paddingTop: '80px !important' }}>
        <Image
          src="/img/successful-password-reset.png"
          alt="..."
          width={271}
          height={356}
          className="img-fluid"
        />
        
        <p className="text-muted text-sm" style={{ fontWeight: 500, lineHeight: '32px', marginBottom: 60, marginTop: 40 }}>
          You can use your new password to login to your account
        </p>

        <Button variant="primary" size="lg" onClick={() => setCurrentIndex(0)}>
          Back to login
        </Button>
      </Card.Body>
    </Card>
  )
}
