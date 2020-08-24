import React, { Fragment } from "react"
import Avatar from "components/Avatar"

export default function Devit({ avatar, id, content, createdAt, userName }) {
  return (
    <Fragment>
      <article key={id}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        div {
          padding-right: 10px;
        }
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #eee;
        }

        p {
          margin: 0;
          line-height: 1.3125;
        }

        span {
          color: #555;
        }

        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </Fragment>
  )
}
