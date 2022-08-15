import {useFonts} from "expo-font";

export default () => {
    const [fontsLoaded] = useFonts({
        'Lato-BoldItalic': require("../assets/fonts/Lato-BoldItalic.ttf"),
        'Lato-Regular': require("../assets/fonts/Lato-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
}