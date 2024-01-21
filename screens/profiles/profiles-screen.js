import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const ProfilesScreen = () => {
    const navigation = useNavigation()
    return ( 
        <View>
            <Text>Profile Screen</Text>
            <Button title="Some Profile" onPress={() => navigation.navigate("Profile", {profileId: 1})}/>
        </View>
    );
}
 
export default ProfilesScreen;