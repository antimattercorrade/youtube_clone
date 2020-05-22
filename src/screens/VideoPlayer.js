import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { useTheme } from '@react-navigation/native';

const VideoPlayer = ({route}) => {
    const {colors} = useTheme()
    const {videoId,title} = route.params
    const textColor = colors.iconColor
    return (
        <View style = {{
            flex: 1,
            marginTop: Constant.statusBarHeight
        }}>
            <View style = {{
                width: "100%",
                height: 200
            }}>
                <WebView 
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                    source = {{uri: `https://www.youtube.com/embed/${videoId}`}}
                />

            </View>
            <Text style = {{
                fontSize: 20,
                width: Dimensions.get("screen").width - 50,
                margin: 9,
                color: textColor
            }}
            numberOfLines = {2}
            ellipsizeMode = "tail"
            >
                {title}
            </Text>
            <View 
                style = {{
                    borderBottomWidth: 1
                }}
            />
        </View>
    )
}

export default VideoPlayer;