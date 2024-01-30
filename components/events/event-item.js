import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventItem = ({ id, name, description, qrCode }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Event", { EventId: id, name, description })}>
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
            <Image
                style={{ width: 100, height: 100}}
                source={{ uri: qrCode }}
            />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#c5c5c5',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    },
})

export default EventItem;