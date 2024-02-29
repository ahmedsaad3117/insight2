import { Dispatch, SetStateAction, useState } from "react"
import { Card } from "react-bootstrap"
import CheckMail from "./CheckMail";
import ForgotPasswordForm from "./ForgotPasswordForm"

interface Props {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function ForgotPassword({ setCurrentIndex }: Props) {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  return (
    <Card style={{ width: 591, height: 589 }}>
      <Card.Header className="px-lg-5 py-4">
        <div className="card-heading text-primary fw-700 fs-15-45">forgot password</div>
      </Card.Header>
      { currentScreen === 0 ?
        <ForgotPasswordForm setCurrentIndex={setCurrentIndex} setCurrentScreen={setCurrentScreen} /> :
        currentScreen === 1 ?
        <CheckMail setCurrentIndex={setCurrentIndex} setCurrentScreen={setCurrentScreen} /> :
        <></>
      }
    </Card>
  )
}
