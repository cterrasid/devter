import { Fragment, useState, useEffect } from "react"
import Avatar from "components/Avatar"
import AppLayout from "components/AppLayout"
import Devit from "components/Devit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <Fragment>
      <AppLayout>
        <header>
          <Avatar />
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => {
            return (
              <Devit
                key={id}
                username={username}
                avatar={avatar}
                message={message}
              />
            )
          })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          padding-top: 49px;
        }

        header {
          display: flex;
          border-bottom: 1px solid #ccc;
          align-items: center;
          height: 49px;
          width: 100%;
          position: sticky;
          top: 0;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
        }

        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          position: sticky;
          height: 49px;
          width: 100%;
        }
      `}</style>
    </Fragment>
  )
}
