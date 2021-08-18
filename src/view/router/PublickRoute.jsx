import {Route, Redirect} from "react-router-dom";
export const PublickRoute = ({Component, path, user})=>{
    // const user =JSON.parse( localStorage.getItem("user"))
    if(user !== null) return <Redirect to="/dashboard" />
    return <Route path={path}>
        <Component/>
    </Route>
}
