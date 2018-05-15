import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
const Header = () => (
    <View style={styles.Header}>
        <Text style={styles.textStyles} > Todo Application </Text>
    </View>
);

const styles = StyleSheet.create({
    Header: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2196F3"
    },
    textStyles: {
        fontSize: 24,
        color: '#ffff'
    }
});


export default Header;