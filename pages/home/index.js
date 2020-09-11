import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Avatar from "components/Avatar"
import AppLayout from "components/AppLayout"
import Devit from "components/Devit"
import { colors } from "styles/theme"
import useUser from "hooks/useUser"
import { fetchLatestDevits } from "firebase/client"
import CreateIcon from "components/Icons/createIcon"
import HomeIcon from "components/Icons/homeIcon"
import SearchIcon from "components/Icons/searchIcon"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio / Devter</title>
      </Head>
      <AppLayout>
        <header>
          <Avatar />
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ avatar, id, content, createdAt, userId, userName }) => {
              return (
                <Devit
                  avatar={avatar}
                  content={content}
                  createdAt={createdAt}
                  key={id}
                  userId={userId}
                  userName={userName}
                />
              )
            }
          )}
        </section>
        <nav>
          <Link href="/home">
            <a>
              <HomeIcon stroke={colors.primary} />
            </a>
          </Link>
          <Link href="/search">
            <a>
              <SearchIcon stroke={colors.primary} />
            </a>
          </Link>
          <Link href="/compose/devit">
            <a>
              <CreateIcon stroke={colors.primary} />
            </a>
          </Link>
        </nav>
      </AppLayout>
      <style jsx>{`
        header {
          display: flex;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          align-items: center;
          height: 49px;
          width: 100%;
          position: sticky;
          top: 0;
        }

        section {
          flex: 1;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
          padding-left: 15px;
        }

        nav {
          background: ${colors.white};
          bottom: 0;
          border-top: 1px solid #eee;
          display: flex;
          position: sticky;
          height: 49px;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a:hover > :global(svg) {
          stroke: ${colors.secondary};
        }
      `}</style>
    </>
  )
}
