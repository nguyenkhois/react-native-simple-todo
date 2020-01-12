import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export function HomeScreen(props) {
    const globalState = useSelector((state) => state);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", height: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>To-Do List app</Text>

                <Text>Global state:</Text>
                <Text>{JSON.stringify(globalState, null, 4)}</Text>

                <Button title="About screen" onPress={() => props.navigation.navigate("About")} />
            </ScrollView>
        </View>
    );
}
