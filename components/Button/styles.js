import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
button {
  align-items: center;
  background-color: ${colors.black};
  border-radius: 9999px;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-weight: 800;
  font-size: 16px;
  padding: 8px 24px;
  transition: opacity .3s ease;
}

button > :global(svg) {
  margin-right: 8px;
}

button:hover {
  opacity: .7;
}
`
