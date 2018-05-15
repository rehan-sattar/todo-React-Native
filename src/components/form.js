import React from "react";
import { TextInput, Button, View } from "react-native";
import ListComponent from "./list"

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            todoText: '',
            items: []
        }
    }
    handleChange(value) {
        this.setState({
            todoText: value
        });
    };

    addToTodoList() {

        let items = this.state.items
        if (this.state.todoText !== "") {
            items.push(this.state.todoText);
            this.setState({
                items,
                todoText: ''
            });
        } else {
            alert('Please enter a value')
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    style={{
                        marginBottom: 10,
                        fontSize: 20
                    }}
                    value={this.state.todoText}
                    onChangeText={this.handleChange.bind(this)} />
                <Button
                    title="Add"
                    onPress={this.addToTodoList.bind(this)} />
                <View style={{flex: 1}}>
                    <ListComponent listOfTodos={this.state.items} />

                </View>
            </View>
        );
    }
}