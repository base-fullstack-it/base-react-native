import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import {useEffect} from "react";
import {useLoggedInUserQuery} from "../../services/userApiSlice";
import {useLazyGetMenuQuery} from "../../services/menuApiSlice";

export default (menuType:MenuLocationTypes) => {
    const {data} = useLoggedInUserQuery();
    const [triggerGetMenu, result] = useLazyGetMenuQuery();
    //if is full menu then we need the dspr id
    useEffect(() => {
        if (!data) return;
        const {defaultAddress} = data;
        // if (!data || data && !data.defaultAddress) return;
        switch (menuType) {
            case MenuLocationTypes.CURRENT_LOCATION:
                // dispatch<any>(getMenuByLatLong(coords.latitude, coords.longitude, dsprId, isFullMenuShown))
                //     .then(response => checkForClosedMessageAndRenderMenu(response, dsprId));
                break;
            case MenuLocationTypes.DELIVERY_ADDRESS:
                //dispatch<any>(getMenuByDefaultAddress(defaultAddress.zipCode, defaultAddress.street, dsprId, isFullMenuShown))
                triggerGetMenu({zip_code: defaultAddress!.zipCode, street: defaultAddress!.street});
                break;
            case MenuLocationTypes.DEFAULT_MENU:
                triggerGetMenu({zip_code: defaultAddress!.zipCode});
                console.log(result,'RESULTOFMENU')
                // could be not needed for user app
                //     setShowPleaseEnableLocation(true);
                break;
            default:
                break;
        }

    }, [data])


}