import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const TodoItem = ({ item, onPressHandler }) => {
    return (
        <>
            <TouchableOpacity onPress={() => onPressHandler(item.key)}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>{item.text}</Text>
                    <MaterialIcons
                        name='delete'
                        size={20}
                        color='#e63946'
                    />
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor: '#a8dadc',
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: '#f1faee',
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft: 10,
        fontFamily: 'monospace',
        fontSize: 15,
    }
})

export default TodoItem
