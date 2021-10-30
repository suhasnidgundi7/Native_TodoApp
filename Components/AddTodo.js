import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

const AddTodo = ({ submitHandler }) => {
    
    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)                
    }

    return (
        <>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="New Todo....!"
                    onChangeText={changeHandler}
                />
                <Button
                    title='Add Todo'
                    color='#1d3557'
                    onPress={() => submitHandler(text)}
                    style={styles.button}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#457b9d',        
    },
    button: {
        
    }
})

export default AddTodo
