import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const EventDetailScreen = props => {
    const route = useRoute()

    const { EventId, title, description } = route.params
    
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