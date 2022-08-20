import {Avatar} from "@rneui/themed";
import {getEnvVars} from "../../environment";
import {ProductCategoryDTO} from "../../model/dto/ProductCategoryDTO";
import {useSelector} from "react-redux";
import {selectAuth} from "../../feature/auth/slice/authSlice";
import {ProductDTO} from "../../model/dto/ProductDTO";
const {apiUrl} = getEnvVars();
export default ({item}: { item: ProductDTO }) => {
    const auth = useSelector(selectAuth);
    return <Avatar size={'xlarge'} source={{
        uri: apiUrl + item.imageLocation + `?access_token=${auth.token}`
    }}/>
}