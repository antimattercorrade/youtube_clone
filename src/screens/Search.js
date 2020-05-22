import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard.js'
import Constant from 'expo-constants'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'


const SearchScreen = ({navigation}) => {
    let API_KEY // Your Youtube API KEY
    const [value,setvalue] = useState("")
    const {colors} = useTheme()
    const mycolor = colors.iconColor
    // const [miniCardData, setMiniCardData] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state => {
        return state.cardData
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            // setMiniCardData(data.items)
            dispatch({type: "add", payload: data.items})
        })
    }
    return (
        <View style = {{
            flex: 1,
            marginTop: Constant.statusBarHeight,
        }}>
            <View style = {{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: colors.headerColor
                // shadowOffset: { width: 10, height: 10 },
                // shadowColor: 'black',
                // shadowOpacity: 1.0
                // For ios
            }}>
                <Ionicons style = {{
                    color: mycolor
                }} name = "md-arrow-back" size ={32} 
                onPress = {() => navigation.goBack()}
                />
                <TextInput 
                    style = {{
                        width: "70%",
                        backgroundColor: "#e6e6e6"
                    }}
                    value = {value}
                    onChangeText = {(text) => setvalue(text)}
                />
                <Ionicons style = {{
                    color: mycolor
                }} name = "md-send" size = {32} 
                onPress = {() => fetchData()}
                />
            </View>
                { loading ? <ActivityIndicator style = {{
                    marginTop: 10
                }} size = "large" color = "red" />
                :
                null
                }
            
                <FlatList 
                    data = {miniCardData}
                    renderItem = {({item}) => {
                        return (
                            <MiniCard 
                                videoId = {item.id.videoId}
                                title = {item.snippet.title}
                                channel = {item.snippet.channelTitle}
                            
                            />
                        )
                    }}
                    keyExtractor = {item => item.id.videoId}
                />
            
        </View>
    )
}

export default SearchScreen;