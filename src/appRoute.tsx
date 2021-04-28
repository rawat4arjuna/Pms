import React, { useState } from "react";
import { BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import light from "./utils/Theme/lightTheme";
import dark from "./utils/Theme/darkTheme";
import { ThemeProvider, FormGroup, FormControlLabel} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Login from './pages/login/index'
import Signup from './pages/signup/index'
import Dashboard from "./pages/dashboard/index";


const AppRoute: React.FC<{}> = () => {
   const [theme, SetTheme] = useState<any>(light);
   const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true
    });
    const themeSwitchChange = (event:any) => {
      SetTheme(theme === dark ? light : dark);
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    
   const appliedTheme = createMuiTheme(theme);

   return (
      <ThemeProvider theme={appliedTheme}>
         <div>
            <Switch 
               onChange={themeSwitchChange}
               inputProps={{ 'aria-label': 'primary checkbox' }} 
            /> 
         </div>
         <BrowserRouter>
            <RouterSwitch>
               <Route exact path="/" component={Login} />
               <Route exact path="/signup" component={Signup} />
               <Route exact path="/dashboard" component={Dashboard} />
            </RouterSwitch>
         </BrowserRouter>
      </ThemeProvider>
   );
};
export default AppRoute;
