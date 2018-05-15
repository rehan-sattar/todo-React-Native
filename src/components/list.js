import React from "react";
// import { List } from "react-native";
import { Text , View, ScrollView } from "react-native";


export default class ListComponent extends React.Component {
    render() {
        return (
           <ScrollView style={{flex: 1}}>
                {
                    this.props.listOfTodos.map((listItem, index) => {
                        return (
                            <Text 
                                key={index}
                            style={{
                                padding: 10,
                                fontSize: 24
                            }}> {index + 1}.  {listItem} </Text>
                        )
                    })
                }

        </ScrollView>
        );
    }
};

