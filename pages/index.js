import Head from "next/head"
import AppLayout from "components/AppLayout"
import Button from "components/Button"
import GitHubIcon from "components/Icons/github"
import { colors } from "styles/theme"
import { loginWithGitHub, onAuthStateChanged } from "firebase/client"
import { useState, useEffect } from "react"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const onClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
        console.log(user)
      })
      .catch((err) => console.error(err))
  }
  return (
    <div className="container">
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="Logo" />
          <h1>Devter</h1>
          <h2>Talk about development with developers</h2>
          <div>
            {user === null && (
              <Button onClick={onClick}>
                <GitHubIcon width={32} height={32} fill={colors.white} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }

        img {
          width: 120px;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }

        div {
          margin-top: 16px;
        }
      `}</style>
    </div>
  )
}
