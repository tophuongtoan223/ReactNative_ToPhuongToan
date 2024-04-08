import { useState } from "react";
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"; 
const App = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onPress = () =>
    {
    Alert.alert(`Đăng nhập thành công với tài khoản là "${email}" và mật khẩu là "${password}"`);
    }
    return(
        <View style={myStyle.container}>
            <ImageBackground source={require("./asset/bg.jpg")} style={myStyle.image}>
                <Image
                    style={myStyle.img}
                    source={require("./asset/pokemongo.jpg")}
                    resizeMode="repeat"
                >
                </Image>
                <TextInput
                    style={myStyle.textInput}
                    onChangeText={setEmail}
                    placeholder="Nhập tài khoản"
                    value={email}
                />
                <TextInput
                    style={myStyle.textInput} onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry
                    value={password}
                />
                <TouchableHighlight
                    style={myStyle.button}
                    onPress={onPress}
                >
                    <Text style={myStyle.buttonText}> 
                    Đăng nhập
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    )
}
export default App;
const myStyle = StyleSheet.create(
    {
        container: {
            flex:1,
            justifyContent: "center",
        },
        textInput: {            
            backgroundColor: "aqua",
            margin:5            
        },
        button: {
            backgroundColor: "aqua",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 5            
        },
        buttonText:{
            color: "black",
            fontSize: 29, 
            fontWeight: "bold"
        },
        image:{
            flex: 1,
            justifyContent: 'center',
        },
        img:{
            width:250,
            height:150,
            marginLeft:70
        }
    }
)