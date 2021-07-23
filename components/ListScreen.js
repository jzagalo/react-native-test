import React, { Component, useState } from "react";
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert,  BackHandler, FlatList, Platform, StyleSheet, Text, View, ToastAndroid, Toast } from "react-native";
import Constants from 'expo-constants';
import { getData, storeData } from "../storage";
import { NavigationContainer } from '@react-navigation/native';

export default class ListScreen extends Component {

    constructor(props){
        super(props)
        this.state = { listData: [] }
    }

    async componentDidMount(){ 
              
        BackHandler.addEventListener("hardwareBackPress", () => { return true })         
        await AsyncStorage.getItem('restaurants',
                (err, inRestaurants) => {            
            if (inRestaurants === undefined || inRestaurants === null || inRestaurants.length === 0) {
                inRestaurants = [];                               
            } else {
                inRestaurants = JSON.parse(inRestaurants);                
            }                         
            this.setState({ listData: inRestaurants });                    
        })        
    }   

    render(){
        const { listData} = this.state
        const { navigation } = this.props  

        const createTwoButtonAlert = (index) => {
            Alert.alert("Please Confirm",
            "Are you sure you want to delete this restaurant?",
            [
                { text: "Yes", onPress: () => {
                    console.log("Pressed")
                    AsyncStorage.getItem("restaurants",
                         (inError, inRestaurants) => {
                            if(inRestaurants === null){
                                inRestaurants = []
                            } else {
                                inRestaurants = JSON.parse(inRestaurants)
                            }

                            for(let i=0; i < inRestaurants.length; i++){
                                const restaurant = inRestaurants[i];
                                if(i === index){
                                    inRestaurants.splice(i, 1);
                                    break;
                                }
                            }
                            
                            this.setState({ listData: inRestaurants});
                           /* AsyncStorage.setItem("restaurants", 
                                JSON.stringify(inRestaurants), () => {                                   
                                    ToastAndroid.show({ 
                                        text: "Restaurant deleted",
                                        position: "bottom", type: "danger",
                                        duration: 2000 
                                    });
                                })
                        
                            );*/
                        }),
                    { text : "No" }, { text : "Cancel", style : "cancel" }
                }}],
                { cancelable : true }
            )
        };

        return(            
            <View style={styles.listScreenContainer} >
                <CustomButton text="Add Restaurant" width="94%" onPress={() => navigation.navigate('AddScreen')} />      
               { 
                listData.map((item, index) => {
                   return(
                    <View style={styles.restaurantContainer} key={index} >
                        <Text style={styles.restaurantName}>{item.name}</Text>   
                        <CustomButton  text="Delete" onPress={() => createTwoButtonAlert(index) }   />                            
                   </View>
                   )
                }
               )
            }
            </View>
            )
        }
}


let styles = StyleSheet.create({
    listScreenContainer : { 
        flex : 1, alignItems : "center", justifyContent : "center",
        ...Platform.select({
        ios : { paddingTop : Constants.statusBarHeight },
        android : { }
        })
    },
    restaurantList : { width : "94%" },
        restaurantContainer : { flexDirection : "row", marginTop : 4, 
        justifyContent: "space-between", width: "94%",
        marginBottom : 4, borderColor : "#e0e0e0", borderBottomWidth : 2, 
        alignItems : "center"
    },
    restaurantName : { flex : 1 }
})

