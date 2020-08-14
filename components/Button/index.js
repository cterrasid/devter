import { Fragment } from 'react'
import styles from './styles'

export default function Button ({ children, onClick }) {
  return (
    <Fragment>
      <button onClick={onClick}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
