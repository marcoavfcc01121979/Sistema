import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const { signed, loading } = useContext(AuthContext)

    if(loading) {
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    return(
        <Route 
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    )
}