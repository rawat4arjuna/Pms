import { AppBar, Container, CssBaseline, Drawer, List, ListItem, ListItemIcon, Toolbar, Typography, ListItemText } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
}));

const Dashboard: React.FC <{}>=()=> {
    const classes = useStyles()
    return (
        <>
        <Container>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant= "h6" noWrap>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                      }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {['Create Project', 'Delete'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <CreateIcon /> : <DeleteIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>

                    </div>

                </Drawer>

            </div>

        </Container>
        </>
    
    );
  }

  export default Dashboard