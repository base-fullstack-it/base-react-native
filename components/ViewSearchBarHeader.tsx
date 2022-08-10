import {useSafeAreaInsets} from "react-native-safe-area-context";
import useToggle from "../hooks/useToggle";
import SearchBarHeader from "./SearchBarHeader";
import DefaultCustomHeader from "./DefaultCustomHeader";
import {DrawerHeaderProps} from "@react-navigation/drawer";

export default ({drawerHeaderProps}:{drawerHeaderProps:DrawerHeaderProps}) => {
    // drawerHeaderProps.options.headerLeft(()=><></>);
    const {
        invokeToggle,
        toggleState
} = useToggle();

    return (
        toggleState
            ? <DefaultCustomHeader invokeToggle={invokeToggle}/>
            : <SearchBarHeader invokeToggle={invokeToggle}/>
        )
}