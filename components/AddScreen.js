import React, { useState } from 'react'
import { View, ScrollView, StyleSheet,  Text, Platform } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import CustomTextInput from './CustomTextInput'
import { NavigationContainer } from '@react-navigation/native';
import CustomButton from './CustomButton'
import {  getData, storeData } from '../storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddScreen({ navigation }){
    const [cusine, setCusine] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [delivery, setDelivery] = useState("");
    const [ name, setName] = useState("");
    const [ phoneNumber, setPhoneNumber] = useState("");
    const [ webSite, setWebSite] = useState("");
    const [ address, setAddress] = useState("");   

    let result = { cusine, price, rating, delivery, name, phoneNumber, webSite, address};
   
    return(
        <ScrollView style={styles.AddScreenContainer}>
            <View style={styles.addScreenInnerContainer}>
                <View style={styles.addScreenFormContainer}>
                    <CustomTextInput label="Name" maxLength={20} stateHolder={setName}  />
                    <Text style={styles.fieldLabel}>Cuisine</Text>
                    <View style={styles.pickerContainer}>                      
                        <Picker style={styles.picker} selectedValue={cusine} onValueChange={(itemValue) => setCusine(itemValue)  }>
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Algerian" value="Algerian" />
                            <Picker.Item label="American" value="American" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker> 
                    </View> 
                    <Text style={styles.fieldLabel}>Price</Text>
                    <View style={styles.pickerContainer}>
                        <Picker style={styles.picker} selectedValue={price}
                                onValueChange={ (inItemValue) => setPrice(inItemValue) } >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>   
                    </View>   
                    <Text style={styles.fieldLabel}>Rating</Text>
                    <View style={styles.pickerContainer}>
                        <Picker style={styles.picker} 
                            selectedValue={rating} 
                            onValueChange={ (inItemValue) => setRating(inItemValue) } >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View> 
                    <CustomTextInput label="Phone Number" maxLength={20} 
                        stateHolder={setPhoneNumber}  />   
                    <CustomTextInput label="Address" maxLength={20} 
                        stateHolder={setAddress}  /> 
                    <CustomTextInput label="Web Site" maxLength={20} 
                        stateHolder={setWebSite}   /> 
                    <Text style={styles.fieldLabel}>Delivery?</Text>
                    <View style={styles.pickerContainer}>
                        <Picker style={styles.picker}  selectedValue={delivery}
                            onValueChange={ (inItemValue) => setDelivery(inItemValue) }  >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Yes" value="Yes" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>                                       
                </View> 
                <View style={styles.addScreenButtonsContainer}>
                    <CustomButton text="Cancel" width="44%" 
                        onPress={ () => { navigation.navigate("ListScreen"); } } />
                    <CustomButton text="Save" width="44%"
                        onPress={  () => {
                            AsyncStorage.getItem('restaurants',
                             (err, inRestaurants) => {
                           
                            if (inRestaurants === undefined) {
                                inRestaurants = [];                               
                            } else {
                                inRestaurants = JSON.parse(inRestaurants);
                                inRestaurants.push(result);
                            }                                   
                            
                            

                            AsyncStorage.setItem("restaurants", JSON.stringify(inRestaurants), () => {                                
                                navigation.push('ListScreen', {
                                    data: inRestaurants
                                })                                                              
                            })
                        })             
                        }} />
                </View>
            </View> 
       </ScrollView>             
     );    
}

const styles = StyleSheet.create({
    addScreenInnerContainer : {
         flex : 1, alignItems : "center", paddingTop : 20, width : "100%" 
    },
    addScreenFormContainer : { width : "96%" },
    fieldLabel : { marginLeft : 10 },
    pickerContainer : {
        ...Platform.select({
            ios : { },
            android : { width : "96%", borderRadius : 8, borderColor : "#c0c0c0", 
            borderWidth : 2,
            marginLeft : 10, marginBottom : 20, marginTop : 4
            }
        })
    },
    picker : {
        ...Platform.select({
        android: { width : "96%", borderRadius : 8, 
            borderColor : "#c0c0c0", borderWidth : 2, height: 15, 
            marginLeft : 10, marginBottom : 20, marginTop : 4
        },
        ios : { }
        })
    },
    addScreenButtonsContainer : { 
        flexDirection : "row", justifyContent : "center"
    }
})

export default AddScreen