import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {height, width} from 'react-native-dimension';
const InputErrorMessage = ({
    value
}) => {
    if (value != null && value != '') {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{value}</Text>
            </View>
        );
    }
    return null;
};

export default InputErrorMessage;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '4%',
        marginBottom: 10
    },
    label: {
        color: 'red',
        fontSize: height(1.8),
        fontWeight: '400'
    }
    
  });