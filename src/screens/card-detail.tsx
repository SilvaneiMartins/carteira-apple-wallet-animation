import React from "react";
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

// @ts-ignore
import { RowItem, TableView } from "react-native-ios-kit";

import { CardStackScreenProps } from "../cards-stack";
import { DetailCard } from "../components/detail-card";

export const CardDetail = ({
    route: {
        params: { item },
    },
}: CardStackScreenProps<"CardDetail">) => {
    const { image, id } = item;
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    return (
        <Animated.ScrollView
            onScroll={scrollHandler}
            contentContainerStyle={styles.contentContainer}
            style={styles.container}
        >
            <View>
                <DetailCard
                    scrollY={scrollY}
                    image={image}
                    sharedElementId={id}
                />
            </View>
            <TableView
                header="Informações do cartão"
                footer="Gerencie as configurações do seu cartão"
            >
                <RowItem
                    icon="card-outline"
                    title="Número do cartão"
                    subtitle="**** **** **** 1234"
                />
                <RowItem
                    icon="calendar-outline"
                    title="Data de validade"
                    subtitle="08/24"
                />
                <RowItem
                    icon="person-outline"
                    title="Nome do Titular"
                    subtitle="Silvanei Martins"
                />
            </TableView>

            <TableView header="Transações recentes">
                <RowItem
                    icon="cash-outline"
                    title="Churrasco"
                    subtitle="R$ 54,32 - Hoje"
                />
                <RowItem
                    icon="cafe-outline"
                    title="Shopping"
                    subtitle="R$ 3,50 - Ontem"
                />
                <RowItem
                    icon="restaurant-outline"
                    title="Pizzaria"
                    subtitle="R$ 45,28 - Última sexta-feira"
                />
            </TableView>

            <TableView
                header="Configurações e mais"
                footer="Personalize as configurações da sua carteira"
            >
                <RowItem
                    icon="settings-outline"
                    title="Configurações de pagamento"
                    subtitle="Gerencie suas opções de pagamento"
                />
                <RowItem
                    icon="notifications-outline"
                    title="Notificações"
                    subtitle="Alertas de transação e muito mais"
                />
                <RowItem
                    icon="information-circle-outline"
                    title="Ajuda"
                    subtitle="Termos, política de privacidade e muito mais"
                />
            </TableView>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: "#EFEFF4",
        flexGrow: 1,
        padding: 16,
    },
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
});
