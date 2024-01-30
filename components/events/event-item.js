import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventItem = ({id, name, description, qrCode}) => {
    const navigation = useNavigation()
    return ( 
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Event", {EventId: id, name, description})}>
            <Text>{name}</Text>
            <Text>{description }</Text>
            <Image
                style={{width:100,height:100}}
                source={{uri: qrCode}}
            />
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    },
})
 
export default EventItem;