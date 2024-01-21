import { View, Text, FlatList, RefreshControl, } from "react-native";
import {DUMMY_DATA} from "../../data/dummy";
import EventItem from "./event-item";

const EventList = () => {
    const renderItem = (item) => {
        return <EventItem id={item.item.id} title={item.item.title} description={item.item.description}/>
    }
    return (  
        <View>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log("refreshing...")}
                    />
                }
                
            />
        </View>
    );
}
 
export default EventList;