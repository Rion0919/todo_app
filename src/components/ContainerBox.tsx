import React from 'react'
import Grid from '@mui/material/Grid'
const ContainerBox: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Grid container justifyContent="center" alignItems='center' mt={6}>
      <Grid item>
        {children}
      </Grid>
    </Grid>
  )
}

export default ContainerBox