import Head from "next/head";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </AppLayout>

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 48px;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
