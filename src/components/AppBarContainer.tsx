import React from 'react'
import { AppBarCustomised } from './AppBarCustomized'

export const AppBarContainer: React.FC<Props> = (props) => {
  return (
    <div className="app-bar-container">
      <>
        <AppBarCustomised />
        {props.content()}
      </>
    </div>
  )
}

type Props = {
  content: () => React.ReactNode
}
