import { Fragment } from "react"

export default function HomePage() {
  return (
    <Fragment>
      <section>
        <header>
          <h2>Inicio</h2>
        </header>
        <nav></nav>
      </section>
      <style jsx>{`
        .header {
          border-bottom: 1px solid #ccc;
          align-items: center;
          height: 49px;
          width: 100%;
          position: fixed;
          top: 0;
        }
      `}</style>
    </Fragment>
  )
}
