import React from 'react'

export const AppAnchor: React.FC<Props> = (props) => {
  return (
    <a
      style={{
        position: 'relative',
        top: '-10dvh',
      }}
      id={props.anchor}
    />
  )
}

type Props = {
  anchor: string
}
