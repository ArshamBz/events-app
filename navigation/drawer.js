import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { Image, Linking, SafeAreaView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={ (props) => {
        return(
          <SafeAreaView style={{flex:1, paddingTop:20, backgroundColor:"#8F99A4"}}>
            <View style={{justifyContent:'center', alignItems:'center', height:140}}>
              <Image style={{width:150, resizeMode:'contain'}}
              source={require('../assets/images/logos/logo.png')}
              />
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem 
              label="more info"
              onPress={() => Linking.openURL('https://www.linkedin.com/in/arsham-bozorgi-b190b4220')}
              icon={() => (
                <Ionicons name='logo-linkedin' size={22}/>
              )}
            />
            
          </SafeAreaView>
        );
      }}
      screenOptions={{headerShown:false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title:'Home',
        drawerIcon: () => <Ionicons name='home' size={22}/>
      }}/>
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{
        title:'Profiles',
        drawerIcon: () => <Ionicons name='log-in' size={22}/>
      }}/>
    </Drawer.Navigator>
  );
}