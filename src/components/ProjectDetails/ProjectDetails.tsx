import { FC } from 'react'
import Box from '@mui/material/Box'
import { Chip, Typography } from '@mui/material'
import { SPACING_1 } from '../../sx-constants/spacing'

export interface IProjectDetailsProps {
  key: string
  contents: string[]
  tags: string[]
}

export const ProjectDetails: FC<IProjectDetailsProps> = ({
  key,
  contents,
  tags,
}) => (
  <Box>
    <Box>
      <ul>
        {contents.map((content, index) => (
          <li key={`${key}-details-content-${index}`}>
            <Typography variant="body1" color="grey.500">
              {content}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
    <Box gap={SPACING_1} display="flex" flexWrap="wrap">
      {tags.map((tag, index) => (
        <Chip key={`${key}-details-tag-${index}`} label={tag} />
      ))}
    </Box>
  </Box>
)
