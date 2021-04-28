import React from "react";
import { 
    AppBar, Grid, Box, Button, Container, Card, CssBaseline, Drawer, CardHeader, CardContent,Avatar,
    List, ListItem, ListItemIcon, Toolbar, Typography, ListItemText, Divider
} from '@material-ui/core'
import { makeStyles, Theme,} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { blue } from "@material-ui/core/colors";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
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
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      btn: {
          padding: '10px',
          marginLeft: '100px',
          marginRight: '100px'
      },
      box: { 
        display: "flex",
        padding: '30px 0px'
      },
      bottomRightBox: {
        justifyContent: "flex-end",
        alignItems: "flex-end"
      },
      paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatar: {
        backgroundColor: blue[500],
        padding: '10px',
      }, 
}));

const Dashboard: React.FC <{}>=()=> {
    const classes = useStyles();     
    const menuItems =  [
        {
            name: 'Dashboard',
            icon: 'DashboardIcon'
        },
        {
            name: 'Add Project',
            icon: 'AddCircleOutlineIcon'
        },
        {
            name: 'Reports',
            icon: 'DashboardIcon'
        }
    ]


    return (
        <>
            <Container>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            
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
                                {menuItems.map(item => {
                                    const IconName = item.icon;
                                    return (
                                        <ListItem button key={item.name}>
                                            <ListItemIcon >
                                               <AddCircleOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Divider />
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        <Box
                            component="span" 
                            m={1}
                            className={`${classes.bottomRightBox} ${classes.box}`}
                        >
                            <Button variant="contained" color="primary" style={{ height: 40 }}>
                                Create Project
                            </Button>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                        <Avatar variant="rounded" aria-label="recipe" className={classes.avatar}>
                                            PM
                                        </Avatar>
                                        }
                                        title="Project Management Tool"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the
                                            mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                        <Avatar variant="rounded" aria-label="recipe" className={classes.avatar}>
                                            CM
                                        </Avatar>
                                        }
                                        title="CMS"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the
                                            mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                        <Avatar variant="rounded" aria-label="recipe" className={classes.avatar}>
                                            AD
                                        </Avatar>
                                        }
                                        title="Admin Driver"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the
                                            mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>   
                        </Grid>
                    </main>
                </div>
            </Container>
        </>
    );
  }
  
  export default Dashboard