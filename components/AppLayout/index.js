import { Fragment } from 'react'
import styles, { globalStyles } from './styles'

export default function AppLayout ({ children }) {
  return (
    <Fragment>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </Fragment>
  )
}
