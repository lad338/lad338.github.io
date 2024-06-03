import { SxProps } from '@mui/system'
import { ReactElement } from 'react'
import { FC } from 'react'
import { Box, IconButton } from '@mui/material'

const ICON_STYLE: SxProps = {
  m: 'auto',
  display: 'flex',
}

type IconType = {
  id: string
  icon: ReactElement
  href: string
}

export interface IIconsProps {
  icons: IconType[]
}

export const Icons: FC<IIconsProps> = ({ icons }: IIconsProps) => (
  <Box display="flex" flexDirection="row" position="relative">
    {icons.map((icon) => (
      <IconButton
        id={icon.id}
        key={icon.id}
        sx={ICON_STYLE}
        href={icon.href}
        target="_blank"
      >
        {icon.icon}
      </IconButton>
    ))}
  </Box>
)
