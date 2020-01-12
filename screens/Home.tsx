import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { todoActions } from "../framework/redux/actions/todoActions";
import { baseStyles, homeStyles } from '../styles/';

function createNewTask(content: string) {
    const taskId = Date.now();

    return {
        [taskId]: {
            description: content,
            isDone: false
        }
    };
}

export function HomeScreen(props) {
    const [userInput, setUserInput] = useState(''); // Local state
    const globalState = useSelector((state) => state); // Global state
    const dispatch = useDispatch();

    return (
        <View style={baseStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>To-Do List</Text>

                <TextInput
                    style={homeStyles.inputText}
                    keyboardType="default"
                    returnKeyType="done"
                    onChangeText={(userInput) => setUserInput(userInput)}
                    onSubmitEditing={() => {
                        if (userInput) {
                            dispatch(todoActions.addTask(createNewTask(userInput)));
                            setUserInput('');
                        }
                    }}
                    value={userInput}
                    placeholder="Enter your task"
                />

                <Text>Global state:</Text>
                <Text>{JSON.stringify(globalState, null, 4)}</Text>

                <Button title="Go to About screen >" onPress={() => props.navigation.navigate('About')} />
            </ScrollView>
        </View>
    );
}
