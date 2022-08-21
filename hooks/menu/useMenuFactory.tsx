import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import {useEffect} from "react";
import {useLoggedInUserQuery} from "../../services/userApiSlice";
import {useLazyGetMenuQuery} from "../../services/menuApiSlice";
import {setMenu} from "../../feature/menu/slice/menuSlice";
import {useAppDispatch} from "../../app/hooks";

export interface MenuLoadingValues {
    isUninitialized:boolean;
    isLoading:boolean;
    isFetching:boolean;
}
export default (menuType:MenuLocationTypes):MenuLoadingValues => {
    const {data} = useLoggedInUserQuery();
    const [triggerGetMenu, {data:menuData,isLoading,isUninitialized,isFetching}] = useLazyGetMenuQuery();
    const dispatch = useAppDispatch();
    //if is full menu then we need the dspr id
    useEffect(() => {
        if (!data) return;
        const {defaultAddress} = data;
        // if (!data || data && !data.defaultAddress) return;
        switch (menuType) {
            case MenuLocationTypes.CURRENT_LOCATION:
                //why based on the CURRENT_LOCATION?
                //can we pickup based on going to dispensary?
                //or is it just a delivery service
                // dispatch<any>(getMenuByLatLong(coords.latitude, coords.longitude, dsprId, isFullMenuShown))
                //     .then(response => checkForClosedMessageAndRenderMenu(response, dsprId));
                break;
            case MenuLocationTypes.DELIVERY_ADDRESS:
                //dispatch<any>(getMenuByDefaultAddress(defaultAddress.zipCode, defaultAddress.street, dsprId, isFullMenuShown))
                triggerGetMenu({zip_code: defaultAddress!.zipCode, street: defaultAddress!.street});
                break;
            case MenuLocationTypes.DEFAULT_MENU:
                triggerGetMenu({zip_code: defaultAddress!.zipCode});
                // console.log(result.data,'RESULTOFMENU')
                // could be not needed for user app
                //     setShowPleaseEnableLocation(true);
                break;
            default:
                break;
        }

    }, [data]);

    useEffect(()=>{

        if(!menuData) return ;
        // console.log(result.data,"DI22D I MAKE IT HERE")
        dispatch(setMenu(menuData));

    },[menuData])
    return {isUninitialized,isLoading,isFetching}

}