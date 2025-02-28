//@ts-ignore
import { ThemeProvider } from "react-native-ios-kit";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CardsStack from "./cards-stack";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <CardsStack />
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
