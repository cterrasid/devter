import Button from "components/Button"
import AppLayout from "components/AppLayout"
import { useState } from "react"
import useUser from "hooks/useUser"
import { addDevit } from "firebase/client"
import { useRouter } from "next/router"

const COMPOSE_STATES = {
  USER_UNKNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeDevit() {
  const [message, setMessage] = useState([])
  const [composeStatus, setComposeStatus] = useState(
    COMPOSE_STATES.USER_UNKNOWN
  )
  const user = useUser()
  const router = useRouter()

  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setComposeStatus(COMPOSE_STATES.LOADING)

    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.error(err)
        setComposeStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled =
    message.length === 0 || composeStatus === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="¿Qué está pasando?"
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }

        textarea {
          border: 0;
          font-size: 21px;
          min-height: 200px;
          outline: 0;
          padding: 15px;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}
