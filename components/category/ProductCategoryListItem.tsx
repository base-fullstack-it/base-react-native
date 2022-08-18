import {Avatar, Image, ListItem} from "@rneui/themed";
import { useSelector } from "react-redux";
import {ProductCategoryDTO} from "../../model/dto/ProductCategoryDTO";
import {selectAuth} from "../../feature/auth/slice/authSlice";
import {getEnvVars} from "../../environment";
import {vers} from "../../app/api/apiSlice";

const { apiUrl } = getEnvVars();

export default  ({ item }:{item:ProductCategoryDTO}) =>{
    const auth = useSelector(selectAuth);
    console.log(auth,'authauth')
    return <ListItem style={{borderWidth: 0.17}} bottomDivider>
        {/*<Image*/}
        {/*    resizeMode={"contain"}*/}
        {/*    style={{height:30}}*/}
        {/*    source={require("../assets/splash.png")}*/}
        {/*/>*/}
        <ListItem.Content style={{flexDirection: "row"}}>

            <ListItem.Title>{item.name}</ListItem.Title>
            {/*<ListItem.Subtitle>{item.imageLocation}</ListItem.Subtitle>*/}
        </ListItem.Content>
        <Avatar size={'xlarge'} source={{
            uri: apiUrl + item.imageLocation + `?access_token=${auth.token}`
        }}/>
    </ListItem>
}