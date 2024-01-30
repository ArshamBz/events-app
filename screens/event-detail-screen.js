import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = props => {
    const route = useRoute()
    const navigation = useNavigation()

    const { EventId, name, description } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: name,
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    onPress={() => navigation.goBack()}
                />    
            )
        })
    }, [])
    
    return ( 
        <View style={styles.screen}>
            <Text style={{fontSize:20, marginBottom:20, color:'darkred'}}>This is the Event Detail Screen for object :{EventId}</Text>
            <Text style={{fontSize:24}}>{name}</Text>
            <Text style={{fontSize:20}}>{description}</Text>
        </View>
     );
  };

  const styles = StyleSheet.create({
    screen : {
        padding:20,
    }
  })
  
  export default EventDetailScreen;