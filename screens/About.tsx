import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { todoActions } from "../framework/redux/actions/todoActions";

function createNewTask(content = "") {
    const taskId = Date.now();

    return {
        [taskId]: {
            datetime: taskId,
            description: content,
            isDone: false
        }
    };
}

export function AboutScreen() {
    const [count, setCount] = useState(0); // Local state

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>About screen</Text>

            <Text>Local state - You clicked {count} times</Text>

            <Button title="Click to increase the counter" onPress={() => setCount(count + 1)} />

            <Button
                title="Reset"
                onPress={() => setCount(0)}
                accessibilityLabel="Click here to reset the counter"
            />

            <Button
                title="Add data into global state"
                onPress={() => dispatch(todoActions.addTask(createNewTask()))}
                accessibilityLabel="Click here to reset the counter"
            />
        </View>
    );
}
