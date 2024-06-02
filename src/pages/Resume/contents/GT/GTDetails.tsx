import Typography from '@mui/material/Typography'
import * as React from 'react'

export const GTDetails: React.FC = () => {
  return (
    <>
      <Typography variant="body2" marginTop={5} marginBottom={2}>
        Developed backend servers to deliver RESTful APIs for mobile
        applications using Java/Kotlin with Spring Boot or TypeScript with
        Node.js with clients of restaurant, shopping malls and retails.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Integrated with third party services including CRM and payment services
        upon client requests.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Shipping backend services in Docker container and running on k8s
        environments.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Designed and deployed backend services on cloud services such as AWS and
        GCP.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Prepared API documentation for frontend applications and third parties
        to integrate.
      </Typography>
      <Typography variant="body2" marginBottom={5}>
        Mentored less experienced developers on code review and onboarding.
      </Typography>
    </>
  )
}
