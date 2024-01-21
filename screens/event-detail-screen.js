import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = props => {
    const route = useRoute()
    const navigation = useNavigation()

    const { EventId, title, description } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "new title",
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
            <Text style={{fontSize:30}}>This is the Event Detail Screen for object :{EventId}</Text>
            <Text style={{fontSize:24}}>{title}</Text>
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