import React from 'react'

interface IProps {
  anchor: string
}

export const Anchor: React.FC<IProps> = (props) => {
  return (
    <a
      style={{
        position: 'relative',
        top: '-28dvh',
      }}
      id={props.anchor}
    />
  )
}
