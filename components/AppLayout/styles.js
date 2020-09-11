import css from "styled-jsx/css"
import { colors, fonts, breakpoints } from "styles/theme"
import { addOpacityToColor } from "styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)
const shadow = addOpacityToColor(colors.black, 0.1)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(
        ${backgroundColor} 1px,
        ${colors.lightGrey} 1px
      ),
      radial-gradient(${backgroundColor} 1px, ${colors.lightGrey} 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }
`

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  main {
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0 10px 25px ${shadow};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`
