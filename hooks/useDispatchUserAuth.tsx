import {setUser} from "../feature/auth/slice/authSlice";
import {useAppDispatch} from "../app/hooks";
type handleDispatchUserAuthFunction = ({}:UserInputI) => void;
interface UserInputI {
    access_token: string | null, token_type: string | null};
export default ():({access_token, token_type}: UserInputI) => Promise<unknown>=> {
    const dispatch = useAppDispatch();

    const handleDispatch = ({access_token,token_type}:UserInputI) => new Promise((resolve: any, reject) => {
        dispatch(setUser({
            token:access_token,
            token_type
        }))
        resolve();
    })
    return handleDispatch;
}