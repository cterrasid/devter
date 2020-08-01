import { Fragment } from "react";
import { colors, fonts, colorsTrans, breakpoints } from "../../styles/theme";

export default function AppLayout({ children }) {
  return (
    <Fragment>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{`
        div {
          display: grid;
          place-items: center;
          height: 100vh;
        }

        main {
          background-color: ${colors.white};
          border-radius: 10px;
          box-shadow: 0 10px 25px ${colorsTrans.black};
          height: 100%;
          width: 100%;
        }

        @media (min-width: ${breakpoints.mobile}) {
          main {
            width: 450px;
            height: 90vh;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-image: radial-gradient(
              ${colorsTrans.primary} 1px,
              transparent 1px
            ),
            radial-gradient(${colorsTrans.primary} 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          padding: 0;
          margin: 0;
          font-family: ${fonts.base};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Fragment>
  );
}
