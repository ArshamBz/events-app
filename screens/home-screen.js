import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";

const HomeScreen = props => {
    const navigation = useNavigation()
    const[data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    }, []) 
    
    const fetchData = async() => {
         const response = await fetch('http://127.0.0.1:8000/api/events/')
         const data = await response.json()
         setData(data)
    }

    return ( 
        <View style={styles.screen}>
            <EventList data={data}/>
        </View>
     );
  };

  const styles = StyleSheet.create({
    screen : {
        padding:20,
    }
  })
  
  export default HomeScreen;