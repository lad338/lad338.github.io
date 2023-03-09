import React from 'react'
import { Box, CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { CardExpandMoreIcon } from '../../components'

export const ProjectCardActionBar: React.FC<Props> = (props) => {
  return (
    <Box width="100%" marginX={1}>
      <CardActions disableSpacing>
        <IconButton
          aria-label="open"
          onClick={() => window.open(props.openLink, '_blank')}
        >
          <OpenInNewIcon />
        </IconButton>

        <CardExpandMoreIcon
          expand={props.expanded}
          onClick={props.handleExpandClick}
          aria-expanded={props.expanded}
          aria-label="show more"
        />
      </CardActions>
    </Box>
  )
}

type Props = {
  openLink: string
  expanded: boolean
  handleExpandClick: () => void
}
