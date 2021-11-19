import AuthStack from '@novomarkt/screens/auth'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



const AppRouter = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default AppRouter

const styles = StyleSheet.create({})
