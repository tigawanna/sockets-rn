import AsyncStorage from '@react-native-async-storage/async-storage';

interface Room{
username:string;
room:string
}
export const storeLocalStorageData = async (value:Room) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user-room', jsonValue)
    } catch (e) {
      // saving error
      alert(` error saving to local storage ${e}`)
    }
  }

  export const getLocalStorageData = async ():Promise<Room|undefined> => {
    try {
      const jsonValue = await AsyncStorage.getItem('user-room')
      return jsonValue != null ? JSON.parse(jsonValue) : undefined;
    } catch(e) {
      // error reading value
      alert(` error reading from local storage ${e}`)
      return undefined
    }
  }
