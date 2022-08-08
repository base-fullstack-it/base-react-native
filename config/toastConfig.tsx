//https://github.com/calintamas/react-native-toast-message/blob/05a86209417762183dda8ddcb4c4d4f2d3839e3f/docs/custom-layouts.md
import {View,Text} from "react-native";
import {ToastConfig} from "react-native-toast-message/lib/src/types";
import {BaseToast} from "react-native-toast-message";

const toastConfig:ToastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */

    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */

    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    primaryColorToast: (props) => <BaseToast style={{ borderLeftColor: '#2F84F1' }} {...props} />

};
export default toastConfig;