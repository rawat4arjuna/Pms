import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextOne } from "./contexts/appContext";
import light from "./utils/Theme/lightTheme";
import dark from "./utils/Theme/darkTheme";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Login from './pages/login/index'
import Signup from './pages/signup/index'
import Dashboard from "./pages/dashboard/index";
const AppRoute: React.FC<{}> = () => {
   let { state } = useContext(ContextOne);
   let [theme, SetTheme] = useState<any>(light);
   useEffect(() => {
      let theme = state ? (state.theme ? dark : dark) : dark;
      SetTheme(theme);
   }, [state]);
   console.log("theme",state.theme ,theme)
   let appliedTheme = createMuiTheme(theme);
   return (
      <ThemeProvider theme={appliedTheme}>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Login} />
               <Route exact path="/signup" component={Signup} />
               <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
         </BrowserRouter>
      </ThemeProvider>
   );
};
export default AppRoute;
