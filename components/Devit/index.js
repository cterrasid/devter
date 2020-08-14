import React, { Fragment } from "react"
import Avatar from "components/Avatar"

export default function Devit({ avatar, username, message, id }) {
  return (
    <Fragment>
      <article key={id}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        div {
          padding-right: 10px;
        }
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #0099ff17;
        }
        p {
          margin: 0;
          line-height: 1.3125;
        }
      `}</style>
    </Fragment>
  )
}
