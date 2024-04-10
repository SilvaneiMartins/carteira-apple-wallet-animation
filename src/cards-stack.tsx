import { Platform } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { CardData } from "./data";
import CardList from "./screens/card-list";
import { CardDetail } from "./screens/card-detail";

type CardStackParamList = {
    CardList: undefined;
    CardDetail: { item: CardData };
};

export type CardStackScreenProps<
    RouteName extends keyof CardStackParamList
> = StackScreenProps<CardStackParamList, RouteName>;

const SharedElementStack =
    createSharedElementStackNavigator<CardStackParamList>();

export default function CardsStack() {
    return (
        <NavigationContainer>
            <SharedElementStack.Navigator initialRouteName="CardList">
                <SharedElementStack.Screen
                    name="CardList"
                    component={CardList}
                    options={{
                        gestureEnabled: false,
                        headerLeftContainerStyle: {
                            paddingLeft: 12,
                        },
                        headerRightContainerStyle: {
                            paddingRight: 12,
                        },
                        headerTitle: "Minha Carteira",
                    }}
                />
                <SharedElementStack.Screen
                    name="CardDetail"
                    component={CardDetail}
                    options={{
                        headerTitle: "Detalhes do Cartão",
                        headerBackTitle: "Voltar",
                        cardStyle: {
                            backgroundColor: "#EFEFF4",
                        },
                    }}
                    sharedElements={(route, otherRoute, _showing) => {
                        const { item } = route.params;
                        if (
                            otherRoute.name === "CardList" &&
                            Platform.OS === "ios"
                        ) {
                            return [
                                {
                                    id: item.id,
                                },
                            ];
                        }
                    }}
                />
            </SharedElementStack.Navigator>
        </NavigationContainer>
    );
}
