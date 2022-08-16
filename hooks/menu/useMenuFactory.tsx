import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import {useLazyGetMenuByZipCodeQuery} from "../../services/menuApiSlice";
import {useEffect} from "react";
import {useLoggedInUserQuery} from "../../services/userApiSlice";

export default (menuType:MenuLocationTypes) => {
    const{ data } = useLoggedInUserQuery();
    const [triggerGetMenuByZipCode, result] = useLazyGetMenuByZipCodeQuery();
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
                triggerGetMenuByZipCode({zipCode:data!.defaultAddress!.zipCode});
                // could be not needed for user app
                //     setShowPleaseEnableLocation(true);
                break;
            default:
                break;
        }

    },[data])


}