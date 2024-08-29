import { Stack } from "expo-router";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { View } from "react-native"
export default function RootLayout() {
  return (
    <View className="bg-black flex-1">
      <Header/>
      <View className="flex-1 bg-black">
        <Stack screenOptions={{headerStyle:{backgroundColor: '#000000'}, headerTitleStyle:{fontSize: 24, fontWeight: 'bold', color: '#fff'}}}>
        <Stack.Screen  name="index" options={{title: 'fitdrop'}}/>
        </Stack>
      </View>
      <Footer/>
    </View>
  );
}
