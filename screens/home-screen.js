import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = props => {
    const navigation = useNavigation()
    return ( 
        <View style={styles.screen}>
            <EventList/>
        </View>
     );
  };

  const styles = StyleSheet.create({
    screen : {
        padding:20,
    }
  })
  
  export default HomeScreen;