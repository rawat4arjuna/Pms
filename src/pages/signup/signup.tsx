import { Container, Paper, CssBaseline, TextField, Button, FormControl, Typography, Box} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '200px',
        marginTop: '10%'
    },
    paper: {
        marginTop: '5%',
        padding: '20px 50px',
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
        fontSize: '30px',
    }
}));

const Signup: React.FC <{}>=()=> {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Box component="span" m={1}>
                <Container  component="main" maxWidth="xs" style={{width: '100vw'}}>
                    <Paper   
                        elevation={3} 
                        variant="outlined" 
                        className={classes.paper} 
                    >
                        {/*<h1 className={classes.heading}>SignUp</h1>*/}
                        <Typography
                            className={classes.heading} 
                            align="center" color="primary">
                            SignUp
                        </Typography>
                            <FormControl 
                                fullWidth 
                                className={classes.margin}
                                >
                                    <TextField 
                                        label="Name" 
                                        variant="outlined"
                                        className={classes.textField} 
                                    />
                            </FormControl>
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
                                <TextField 
                                    label="Confirm Password" 
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
                                    Sign up
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
                                    Login
                                </a>
                            </FormControl>     
                    </Paper>
                </Container>
            </Box>
        </>
    );
  }

  export default Signup