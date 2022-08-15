import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import {useLazyGetMenuByZipCodeQuery} from "../../services/menuApiSlice";
import {useEffect} from "react";

export default (menuType:MenuLocationTypes) => {
    const [trigger, result] = useLazyGetMenuByZipCodeQuery();
    useEffect(()=>{
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
                // if (loggedInUser.signupZipCode) {
                //     dispatch<any>(getMenuByZipCode(loggedInUser.signupZipCode, dsprId, isFullMenuShown))
                //         .then(response => checkForClosedMessageAndRenderMenu(response, dsprId));
                // } else {
                //     setShowPleaseEnableLocation(true);
                // }
                //https://stackoverflow.com/questions/71724449/how-can-i-call-rtk-query-hook-when-the-condition-changes
                trigger({zipCode:11722,dsprId: 1,isFullMenuShown:false});
                console.log(result,' we did it');
                break;
            default:
                break;
        }

    },[])


}