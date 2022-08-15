import { createTheme } from "@rneui/themed";

export const theme = createTheme({
    components: {
        Button: {
            // raised: true,
        },
        Input:{
            errorStyle:{ color: 'red' }
        },
        CardDivider:{
            color:"#696773",
            style:{marginVertical:25}
        },
        FAB:{
            color:"#2F84F1"
        }
    },
    lightColors:{
        primary:"#2F84F1",
        secondary:"#66B02D"
    }
    // spacing: {
    //   xs: 4,
    //   sm: 6,
    //   md: 8,
    //   lg: 12,
    //   xl: 16,
    // }
})