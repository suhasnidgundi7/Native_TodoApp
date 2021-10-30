import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>My Todos</Text>    
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#e63946'
    },

    title: {
        textAlign: 'center',
        color: "#f1faee",
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default Header
