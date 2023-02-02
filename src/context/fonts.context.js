import { createContext } from "react";
import { useFonts } from "expo-font";

export const FontContext = createContext(null)

export function FontContextProvider({children}){
    const [fontsLoaded] = useFonts({
        AntonRegular: require("../../assets/fonts/Anton-Regular.ttf"),
        OswaldRegular: require("../../assets/fonts/Oswald-Regular.ttf")
    })

    if (!fontsLoaded) return

    return(
        <FontContext.Provider value={fontsLoaded}>
            {children}
        </FontContext.Provider>
    )
}