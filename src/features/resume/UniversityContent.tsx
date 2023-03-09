import Typography from '@mui/material/Typography'
import * as React from 'react'

export const UniversityContent: React.FC = () => {
  return (
    <>
      <Typography variant="body2">Final year project</Typography>
      <Typography variant="subtitle1">
        AI Tutor for Programming Class <br />
        (the Auto Grading Engine)
      </Typography>
      <Typography variant="body2" marginTop={3} marginBottom={0}>
        A web based auto grading system on code submission of programming
        learners.
        <br />
        Other than pass or fail, the grading system can also provide
        recommendations based on big data of pass submission from other
        students.
      </Typography>
      <Typography variant="subtitle2" marginTop={3}>
        Selected components:
      </Typography>
      <Typography variant="body2" marginBottom={5}>
        <ul style={{ marginLeft: -25 }}>
          <li>
            Extracting abstract syntax tree (AST) in Python program submissions.
          </li>
          <li>
            Determining logic flow information from ASTs such as conditional
            statements and loops.
          </li>
          <li>
            Running cluster analysis on big data of AST from programs using R.
          </li>
        </ul>
      </Typography>
    </>
  )
}
