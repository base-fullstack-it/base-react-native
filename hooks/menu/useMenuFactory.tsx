import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import {useLazyGetMenuByZipCodeQuery} from "../../services/menuApiSlice";
import {useEffect} from "react";
import {useLoggedInUserQuery} from "../../services/userApiSlice";
import {UserDTO} from "../../model/dto/UserDTO";

export default (menuType:MenuLocationTypes) => {
    const{ data } = useLoggedInUserQuery();
    const [trigger, result] = useLazyGetMenuByZipCodeQuery();
    useEffect(()=>{
        if(!data) return;
        switch (menuType) {
            case MenuLocationTypes.CURRENT_LOCATION:
                // dispatch<any>(getMenuByLatLong(coords.latitude, coords.longitude, dsprId, isFullMenuShown))
                //     .then(response => checkForClosedMessageAndRenderMenu(response, dsprId));
                break;
            case MenuLocationTypes.DELIVERY_ADDRESS:
                // const defaultAddress = loggedInUser.defaultAddress;
                // dispatch<any>(getMenuByDefaultAddress(defaultAddress.zipCode, defaultAddress.street, dsprId, isFullMenuShown))
                //     .then(response => {
                //         checkForClosedMessageAndRenderMenu(response, dsprId)
                //     });
                break;
            case MenuLocationTypes.DEFAULT_MENU:
                console.log(data,'userFromDB')
                // console.log(data!.ds,'userFromDB')
                // console.log(data!.defaultAddress!.zipCode,'im just a zipcode')
                // if (loggedInUser.signupZipCode) {
                //     dispatch<any>(getMenuByZipCode(loggedInUser.signupZipCode, dsprId, isFullMenuShown))
                //         .then(response => checkForClosedMessageAndRenderMenu(response, dsprId));
                // } else {
                //     setShowPleaseEnableLocation(true);
                // }
                //https://stackoverflow.com/questions/71724449/how-can-i-call-rtk-query-hook-when-the-condition-changes
                // trigger({zipCode:data!.defaultAddress!.zipCode,dsprId: 1,isFullMenuShown:false});
                trigger({zipCode:data!.defaultAddress!.zipCode});
                // console.log(result,' we did it');
                break;
            default:
                break;
        }

    },[data])


}