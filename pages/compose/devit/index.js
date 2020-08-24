import Button from "components/Button"
import AppLayout from "components/AppLayout"

export default function ComposeDevit() {
  return (
    <>
      <AppLayout>
        <textarea placeholder="¿Qué está pasando?"></textarea>
        <div>
          <Button>Devitear</Button>
        </div>
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
