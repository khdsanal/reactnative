import React,{useState} from "react";
import { View , Text , TouchableHighlight ,TextInput, StyleSheet, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-picker';


export default function Editprofile() {

  const [name,setName]=useState('')
  const [mobile,setMobile]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [image, setImage] = useState(null);
  const navigation=useNavigation()

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync();
  }
  

  const signup=(value)=>
  {
      if(name !='' && mobile !='' && email !='' && password !='')
      {   
          console.log(name,mobile,email,password)
          Alert.alert("Details saved")
          navigation.navigate('login')
        
      }
      else {
          Alert.alert("Fill all the fields")
          

      }
      fetch('https://api.oopacks.com/api/test/update', {
      method: 'PUT',
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
       body: JSON.stringify({
   
      name:name,
      mobile:mobile,
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
                <View style={styles.arrowcontainer}>
                <TouchableHighlight onPress={()=>navigation.navigate('login')} underlayColor={"#17202A"} style={styles.touchablecontainer_0}>
                    <Text style={styles.arrowtext}  >⟵</Text>
                </TouchableHighlight>
                </View>
                <Text style={styles.text_1}>  
                    Edit Profile
                    </Text>
            </View>
            <View style={styles.container_2}>
                <View style={styles.touchableview}>
                <TouchableHighlight
              
                  underlayColor={"transparent"} style={styles.manintouch}>
                      
                    <Text style={styles.touchtext}>Click here to upload the photo</Text>      
                </TouchableHighlight>
                </View>
                <View style={styles.maincontainer}>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Name</Text>
                    <TextInput onChangeText={(name)=>setName(name)} value={name}  style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Mobile</Text>
                    <TextInput keyboardType={"number-pad"} maxLength={10} onChangeText={(mobile)=>setMobile(mobile)} value={mobile} maxLength={10} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}>Email</Text>
                    <TextInput onChangeText={(email)=>setEmail(email)} value={email} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_3}> Password</Text>
                    <TextInput secureTextEntry={true} onChangeText={(password)=>setPassword(password)} value={password} style={styles.textinput}></TextInput>
                </View>
                <View style={styles.container_4}>
                  <TouchableHighlight onPress={signup} style={styles.touchablecontainer}>
                  <Text style={styles.text_4}>SUBMIT</Text>
                  </TouchableHighlight>
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
        flex:0.2,
    },
    touchablecontainer_0:{
        width:100,
        marginTop:10
        
    },
    arrowtext:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        marginTop:-20,
    },
    touchableview:{
        backgroundColor:"red",
        marginLeft:140,
        marginTop:30,
        width:100,
        height:100,
        borderRadius:50,
        borderColor:"black",
        borderWidth:2
    },
    maincontainer:{
        marginTop:30
    }
    ,
    arrowcontainer:{
            marginLeft:30,      
            backgroundColor:"#17202A",
            width:80,
            height:50
    },
    touchtext:{
        marginLeft:20,
        marginTop:20
    },

    text_1:{
        color:"white",
        textAlign:"center",
        fontSize:25,
        marginTop:-30,
        marginLeft:-50
    },
    container_2:{
        flex:1.5,
        backgroundColor:"#D5D8DC",
        borderTopLeftRadius:100
    },
    manintouch:{
      underlayColor:"white"
    },
    container_3:{
        backgroundColor:"#FFFFFF",
        width:"75%",
        marginLeft:50,
        marginTop:20,
        borderRadius:7,
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
        fontSize:15,
    },
    touchablecontainer:{
        height:"27%",
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
        marginTop:9,
    },
    
    
})