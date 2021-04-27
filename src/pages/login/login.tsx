import { Container, Paper, CssBaseline, TextField, Button, FormControl, Typography, Box} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '400px',
        marginTop: '10%'
    },
    paper: {
        marginTop: '25%',
        padding: '50px',
    },
    margin: {
      margin: theme.spacing(1)
    },
    textField: {
        width: '95%',
    },
    anchor: {
        fontSize: '20px',
        color: '#FE6B8B',
        textDecoration: 'none',
        textAlign: 'center',
        marginRight: '20px'
    },
    heading: {
        textAlign:'center',
    }
}));

const Login: React.FC <{}>=()=> {
    const classes = useStyles();

    return (        
        <React.Fragment>
            <CssBaseline />
            <Box component="span" m={1}>
                <Container  component="main" maxWidth="xs" style={{width: '100vw',height:'100vh'}}>
                    <Paper   
                        elevation={3} 
                        variant="outlined" 
                        className={classes.paper} 
                    >
                    <h1 className={classes.heading}>Login</h1>
                        <FormControl 
                            fullWidth 
                            className={classes.margin}
                            >
                                <TextField 
                                    label="Email"
                                    variant="outlined"
                                    className={classes.textField} 
                                />
                        </FormControl>
                        <FormControl 
                            fullWidth 
                            className={classes.margin}
                        >
                            <TextField 
                                label="Password" 
                                variant="outlined"
                                className={classes.textField} 
                                type="password"                        
                            />
                        </FormControl> 
                        <FormControl 
                            fullWidth 
                            className={classes.margin}
                        >
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.textField}
                            
                            >
                                Login
                            </Button>
                        </FormControl>
                        <Typography align="center" color="primary">or</Typography>
                        <FormControl 
                            fullWidth 
                            className={classes.margin}
                        >
                            <a href=""
                            className={classes.anchor}
                            >
                                Signup
                            </a>
                        </FormControl>     
                    </Paper>
                </Container>
            </Box>
        </React.Fragment>
    );
  }

  export default Login