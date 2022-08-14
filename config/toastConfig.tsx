
import {ToastConfig} from "react-native-toast-message/lib/src/types";
import {BaseToast} from "react-native-toast-message";

//https://github.com/calintamas/react-native-toast-message/blob/05a86209417762183dda8ddcb4c4d4f2d3839e3f/docs/custom-layouts.md
const toastConfig:ToastConfig = {
    primaryColorToast: (props) => <BaseToast style={{ borderLeftColor: '#2F84F1' }} {...props} />,
    primaryGreenColorToast: (props) => <BaseToast style={{ borderLeftColor: '#66B02D' }} {...props} />

};
export default toastConfig;