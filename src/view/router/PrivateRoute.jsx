import {Route, Redirect} from "react-router-dom";
export const PrivatePoute = ({Component, path})=>{
    const user =JSON.parse( localStorage.getItem("user"))
    if(user === null) return <Redirect to="/" />
    return <Route path={path}>
        <Component/>
    </Route>
}
