import {useSelector} from "react-redux";
import {ACCESS_TOKEN_TYPES, selectAuth} from "../../feature/auth/slice/authSlice";
import NotAuthorizedNavigator from "./NotAuthorizedNavigator";
import AuthorizedNavigator from "./AuthorizedNavigator";
import useLogout from "../../hooks/useLogout";
import {useEffect} from "react";

export default () => {
    const auth = useSelector(selectAuth);
//TODO: Instead of ACCESS_TOKEN_TYPES.user we should be calling the authorization servers' oauth/check_token(maybe diff name) route and getting the user role

    return (
        !auth.token
        ||
        auth.token && auth.token_type !== ACCESS_TOKEN_TYPES.user
            ? <NotAuthorizedNavigator/>
            :
            <AuthorizedNavigator/>
    )

}