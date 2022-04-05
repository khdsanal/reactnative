import React, { useState } from "react";
import { View , Text , TouchableHighlight ,TextInput, StyleSheet, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Registration(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repassword,setRepassword]=useState('')
    const navigation=useNavigation()

    const signup=()=>
    {
        if(name !='' && email !='' && password !='' && repassword !='' && password==repassword)
        {   
            console.log(name,email,password,repassword)
            Alert.alert("Details saved successfully")
        }
        else {
            Alert.alert("Password should be same and should fill all the fields")

        }
        fetch('https://api.oopacks.com/api/test/register', {
        method: 'POST',
         headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
         body: JSON.stringify({
     
        name: name,
        email: email,
        password: password,
        repassword:repassword
     
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
                <View style={styles.arrowcontainer}>
                <TouchableHighlight  onPress={()=>navigation.navigate('login')} underlayColor={"#17202A"} style={styles.touchablecontainer_0}>
                    <Text style={styles.arrowtext}>⟵</Text>
                </TouchableHighlight>
                </View>
                <Text style={styles.text_1}>  
                    Sign Up
                    </Text>
            </View>
            <View style={styles.container_2}>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Name</Text>
                    <TextInput  onChangeText={(name)=>setName(name)} value={name} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Email</Text>
                    <TextInput value={email}  onChangeText={(email)=>setEmail(email)}  keyboardType="email-address" secureTextEntry={true} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Password</Text>
                    <TextInput secureTextEntry={true} value={password} maxLength={8} onChangeText={(password)=>setPassword(password)} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Confirm Password</Text>
                    <TextInput secureTextEntry={true} value={repassword} maxLength={8} onChangeText={(repassword)=>setRepassword(repassword)} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_4}>
                  <TouchableHighlight style={styles.touchablecontainer} onPress={signup}>
                  <Text style={styles.text_4}>Sign Up</Text>
                  </TouchableHighlight>
                <View style={styles.container_5}>
                    <Text style={styles.text_5}>You have a account ? </Text>
                    <Text style={styles.text_6} onPress={()=>navigation.navigate('login')}>  Login</Text>
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
        flex:0.3,
    },
    touchablecontainer_0:{
        width:100,
        
    },
    arrowtext:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        marginTop:20
    },
    arrowcontainer:{
            marginLeft:30,      
            backgroundColor:"#17202A",
            width:80,
            height:50
    },
    text_1:{
        color:"white",
        textAlign:"center",
        marginLeft:20,
        fontSize:35
    },
    container_2:{
        flex:1,
        backgroundColor:"#D5D8DC",
        borderTopLeftRadius:100
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
        height:"23%",
        backgroundColor:"#17202A",
        borderRadius:7,
        marginLeft:50,
        marginTop:50,
        width:"75%",
    },
    text_4:{
        color:"#FFFFFF",
        fontSize:20,
        textAlign:"center",
        marginTop:5,
    },
    container_5:{
        flexDirection:"row",
    },
    text_5:{
        marginTop:20   ,
        marginLeft:80 
    },
    text_6:{
        marginTop:20  ,
        fontWeight:"bold"
    }
    
})

