import {setUser} from "../feature/auth/slice/authSlice";
import {useAppDispatch} from "../app/hooks";
type handleDispatchUserAuthFunction = ({}:UserInputI) => void;
interface UserInputI {
    access_token: string | null, token_type: string | null};
export default ():handleDispatchUserAuthFunction=> {
    const dispatch = useAppDispatch();
    const handleDispatch = ({access_token,token_type}:UserInputI) => {
        dispatch(setUser({
            token:access_token,
            token_type
        }))
    }
    return handleDispatch;
}