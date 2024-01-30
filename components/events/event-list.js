import { View, Text, FlatList, RefreshControl, } from "react-native";
// import {DUMMY_DATA} from "../../data/dummy";
import EventItem from "./event-item";

const EventList = ({data}) => {
    const renderItem = (item) => {
        return <EventItem id={item.item.it} name={item.item.name} description={item.item.description} qrCode={item.item.qr_code}/>
    }
    return (  
        <View>
            <FlatList
                data={data}
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