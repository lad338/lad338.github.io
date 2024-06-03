import { FC } from 'react'
import Box from '@mui/material/Box'
import { SPACING_1 } from '../../sx-constants/spacing'
import { CardActions } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import IconButton from '@mui/material/IconButton'
import { ExpandMoreIconButton } from '../ExpandMoreIconButton'

interface IProjectCardActionBarProps {
  link: string
  isExpanded: boolean
  onExpandIconClick: () => void
}

export const ProjectCardActionBar: FC<IProjectCardActionBarProps> = ({
  link,
  isExpanded,
  onExpandIconClick,
}) => (
  <Box width="100%" marginX={SPACING_1}>
    <CardActions disableSpacing>
      <IconButton aria-label="open" onClick={() => window.open(link, '_blank')}>
        <OpenInNewIcon />
      </IconButton>

      <ExpandMoreIconButton
        isExpanded={isExpanded}
        onClick={onExpandIconClick}
        aria-expanded={isExpanded}
        aria-label="show more"
      />
    </CardActions>
  </Box>
)
