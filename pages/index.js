import { useEffect } from "react"
import { loginWithGitHub } from "firebase/client"
import Head from "next/head"
import { useRouter } from "next/router"
import AppLayout from "components/AppLayout"
import Button from "components/Button"
import GitHubIcon from "components/Icons/githubIcon"
import { colors } from "styles/theme"
import useUser, { USER_STATES } from "hooks/useUser"

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const onClick = () => {
    loginWithGitHub().catch((err) => console.error(err))
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
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={onClick}>
                <GitHubIcon width={32} height={32} fill={colors.white} />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.UNKNOWN && <p>Loading...</p>}
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
