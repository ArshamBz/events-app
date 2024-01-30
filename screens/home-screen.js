import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";

const HomeScreen = props => {
    const navigation = useNavigation()
    const[data, setData] = useState([])
    const[refresh, setRefresh] = useState(false)

    const handleRefresh = () => {
        console.log('refreshing')
        setRefresh(prevState => !prevState)
    }

    useEffect(()=>{
        fetchData()
    }, [refresh]) 
    
    const fetchData = async() => {
         const response = await fetch('http://127.0.0.1:8000/api/events/')
         const data = await response.json()
         setData(data)
    }

    return ( 
        <View style={styles.screen}>
            <Button onPress={() => navigation.navigate('New Event')} title="add new Event" />
            <EventList data={data} onRefresh={handleRefresh}/>
        </View>
     );
  };

  const styles = StyleSheet.create({
    screen : {
        padding:20,
    }
  })
  
  export default HomeScreen;