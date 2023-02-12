import { createContext, useContext } from "react";
import { useFonts } from "expo-font";

export const FontContext = createContext()

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

export const useFontContext = () => useContext(FontContext)