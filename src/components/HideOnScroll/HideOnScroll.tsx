import { Slide, useScrollTrigger } from '@mui/material'

import { FC } from 'react'

export const HideOnScroll: FC<Props> = (props) => {
  const trigger = useScrollTrigger({
    target: window || undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  )
}

type Props = {
  children: React.ReactElement
}
