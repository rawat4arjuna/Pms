import { Container ,Paper,CssBaseline} from '@material-ui/core'
import React from 'react'

const Login: React.FC <{}>=()=> {
    return (
        
        <React.Fragment>
        <CssBaseline />
        <Container component="main" maxWidth="xs" style={{width: '100vw',height:'100vh'}}>
        <Paper>
                Login
        </Paper>
        </Container>
        </React.Fragment>
        
    
    );
  }

  export default Login