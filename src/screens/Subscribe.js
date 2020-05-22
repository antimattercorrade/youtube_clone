import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header.js'
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'

const Subscribe = () => {
    const {colors} = useTheme()
    const textColor = colors.iconColor
    return (
        <View style = {{
            flex: 1
        }}>
            <Header />
            <Text style = {{
                color: textColor,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 100
            }}>
                <MaterialIcons name = "subscriptions" size = {132} color = {textColor} />
                
            </Text>
            <Text style = {{
                color: textColor,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: 22,
                fontWeight: "bold"
            }}>
                Don't miss out on updates.
            </Text>
            <Text style = {{
                color: textColor,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: 22
            }}>
                Sign in to see subscriptions.
            </Text>
        </View>
    )
}

export default Subscribe;