import AsyncStorage from '@react-native-async-storage/async-storage';
 
export const getRestaurants = (string, callback) => {
    return new Promise( async (resolve, reject) => {
        try {
          let keys = await AsyncStorage.getItem(string, callback());          
          resolve(keys);
        } catch (error) {
          reject(new Error('Error getting items from AsyncStorage: ' + error.message))
        }
    })  
};

export const setRestaurants = (string, callback) => {
    return new Promise( async (resolve, reject) => {
        try {
            let result = await AsyncStorage.setItem(string, callback());          
            resolve(result);
        } catch (error) {
            reject(new Error('Error getting items from AsyncStorage: ' + error.message))
        }
    })
    
}

export const storeData = async (key, value, callback) => {
    try {
      await AsyncStorage.setItem(key, value, callback); 
     
    } catch (error) {
      console.log(error);
    }
};

export const getData = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key);
      if (data === null) {
        data = []  
      }
      return data;     
    } catch (error) {
      console.log(error);
    }
};

 