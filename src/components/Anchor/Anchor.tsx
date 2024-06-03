import { FC } from 'react'

interface IProps {
  anchor: string
}

export const Anchor: FC<IProps> = (props) => {
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
