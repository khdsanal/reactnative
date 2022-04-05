import React, { useState } from "react";
import { View , Text , TouchableHighlight ,TextInput, StyleSheet, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Login(){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigation=useNavigation()
    
    const login=()=>
    {
        
        if(email !='' && password !='' )
        {
    
            console.log(email,password)
            Alert.alert("Login Approved")
            navigation.navigate('editprofile')
        }
        else {
            Alert.alert("Please enter correct details")
        }
            fetch('https://api.oopacks.com/api/test/login', {
             method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({  
                email: email,
                password: password,
                })
            
            }).then((response) => response.json())
            .then((responseJson) => {
            console.log(JSON.stringify(responseJson));
            }).catch((error) => {
                console.error(error);
            });
           
        }

    
    return(

        <View style={styles.container}>
            <View style={styles.container_1}>
                <Text style={styles.text_1}>  
                    OOPACKS
                    </Text>
            </View>
            <View style={styles.container_2}>
                <Text style={styles.text_2}>
                    Login
                </Text>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Email</Text>
                    <TextInput keyboardType="email-address" value={email}  onChangeText={(email)=>setEmail(email)} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Password</Text>
                    <TextInput secureTextEntry={true} value={password} onChangeText={(password)=>setPassword(password)} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_4}>
                  <TouchableHighlight onPress={login} style={styles.touchablecontainer}>
                  <Text style={styles.text_4}>Login</Text>
                  </TouchableHighlight>
                  <View style={styles.container_6}>
                      <Text style={styles.text_7}>
                        Forgot password ?
                      </Text>
                  </View>
                <View style={styles.container_5}>
                    <Text style={styles.text_5}>Don't have any account ?</Text>
                    <Text style={styles.text_6} onPress={()=>navigation.navigate('registration')}>  Sign Up</Text>
                </View>
                </View>
            
           
           
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#17202A",
    },
    container_1:{
        backgroundColor:"#17202A",
        flex:0.4,

    },
    text_1:{
        color:"white",
        textAlign:"center",
        marginTop:"24%",
        fontSize:35
    },
    container_2:{
        flex:1,
        backgroundColor:"#D5D8DC",
        borderTopLeftRadius:100
    },
    text_2:{
        color:"#17202A",
        marginTop:30,
        marginLeft:"40%",
        fontSize:25
    },
  
    container_3:{
        backgroundColor:"#FFFFFF",
        width:"75%",
        marginLeft:50,
        marginTop:30,
        borderRadius:7
    },
    textinput:{
        borderWidth:1,
        width:"95%",
        marginTop:-15,
        marginLeft:14,   
        borderWidth:0,
        color:"#848C94"
    },
    text_3:{
        marginLeft:15,
        color:"black",
        fontSize:15
    },
    touchablecontainer:{
        height:"24%",
        backgroundColor:"#17202A",
        borderRadius:7,
        marginLeft:50,
        marginTop:30,
        width:"75%",
    },
    text_4:{
        color:"#FFFFFF",
        fontSize:20,
        textAlign:"center",
        marginTop:15
    },
    container_5:{
        flexDirection:"row",
    },
    container_6:{
        marginTop:10,
        marginLeft:"35%"
    },
    text_5:{
        marginTop:80   ,
        marginLeft:80 
    },
    text_6:{
        marginTop:80  ,
        fontWeight:"bold"
    }
    
})

