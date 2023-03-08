import Typography from '@mui/material/Typography'
import * as React from 'react'

export const UniversityContent: React.FC = () => {
  return (
    <>
      <Typography>Final year project</Typography>
      <Typography>
        AI Tutor for Programming Class (the Auto Grading Engine)
      </Typography>
      <Typography>
        A web based auto grading system on code submission of programming
        learners.
      </Typography>
      <Typography>
        Other than pass or fail, the grading system can also provide
        recommendations based on big data of pass submission from other
        students.
      </Typography>
      <Typography>Selected components:</Typography>
      <Typography>
        Extracting abstract syntax tree (AST) in Python program submissions.
      </Typography>
      <Typography>
        Determining logic flow information from ASTs such as conditional
        statements and loops.
      </Typography>
      <Typography>
        Running cluster analysis on big data of AST from programs using R.
      </Typography>
    </>
  )
}
